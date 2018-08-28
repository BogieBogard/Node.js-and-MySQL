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
      name: "firstPrompt",
      type: "rawlist",
      message: "Enter the ID of the item you would like to buy",
      choices: [
        "ID:1, Item: You Don't Know JS (Hard cover)",
        "ID:2, Item: Echo Dot",
        "ID:3, Item: Deadpool 2 Blu-Ray Disc",
        "ID:4, Item: MacBook Pro",
        "ID:5, Item: Seasonal Fruit Basket",
        "ID:6, Item: Scorpion Studio Album CD Disc",
        "ID:7, Item: GitHub Developer Plan Promo Code",
        "ID:8, Item: Apple Developer Membership Promo Code"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "1":
          item1();
          break;

        case "2":
          item2();
          break;

        case "3":
          item3();
          break;

        case "4":
          item4();
          break;

        case "5":
          item5();
          break;

        case "6":
          item6();
          break;

        case "7":
          item7();
          break;

        case "8":
          item8();
          break;
      }
    });
}

function item1() {
  inquirer
    .prompt({
      name: "firstPrompt",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      var query = "SELECT id, product_name, stock_quantity FROM bamazon_db WHERE ?";
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
