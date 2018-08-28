const request = require("request");
const fs = require("fs");
const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  runProductDisplay();
});

function runProductDisplay() {
  console.log("Connection established");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    initialPrompt();
    connection.end();
  });
}


function initialPrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What is the ID of the item you would like to buy?",
      choices: [
        "0","1","2","3","4"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "0":
          artistSearch();
          break;

        case "Find all artists who appear more than once":
          multiSearch();
          break;

        case "Find data within a specific range":
          rangeSearch();
          break;

        case "Search for a specific song":
          songSearch();
          break;

        case "Find artists with a top song and top album in the same year":
          songAndAlbumSearch();
          break;
      }
    });
}

function artistSearch() {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(
            "Position: " +
              res[i].position +
              " || Song: " +
              res[i].song +
              " || Year: " +
              res[i].year
          );
        }
        runSearch();
      });
    });
}
