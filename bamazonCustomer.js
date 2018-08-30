const request = require("request");
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
  initialPrompt();
});

function initialPrompt() {
  inquirer
    .prompt({
      name: "action",
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
        case "ID:1, Item: You Don't Know JS (Hard cover)":
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
      name: "stock_quantity",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE id = '1'", function(
        err,
        res
      ) {
        if (err) throw err;
        // Converting the user's choice for the quantity desired
        let formattedAnswer1 = JSON.stringify(answer);
        let formattedAnswer2 = formattedAnswer1.slice(19);
        let formattedAnswer3 = parseInt(formattedAnswer2);
        console.log(
          "You have requested a total quantity of: " + formattedAnswer3
        );

        // Converting the amount currently in stock from an array to an integer
        let formattedRes1 = JSON.stringify(res);
        let formattedRes2 = formattedRes1.slice(111);
        let formattedRes3 = parseInt(formattedRes2);
        console.log("Number currently in stock: " + formattedRes3);

        // If the user asks for a quantity that is greater than what is in stock then notify the user
        if (formattedAnswer3 > formattedRes3) {
          console.log(
            "Insufficent quantity! You asked for " +
              formattedAnswer3 +
              " but we only have " +
              formattedRes3
          );
          connection.end();
        } else {
          connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = '1'",
            [formattedAnswer3],
            function(err, res) {
              if (err) throw err;
              console.log(res);
            }
          );

          connection.end();
        }
      });
    });
}
