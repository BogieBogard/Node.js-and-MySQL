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

        case "ID:2, Item: Echo Dot":
          item2();
          break;

        case "ID:3, Item: Deadpool 2 Blu-Ray Disc":
          item3();
          break;

        case "ID:4, Item: MacBook Pro":
          item4();
          break;

        case "ID:5, Item: Seasonal Fruit Basket":
          item5();
          break;

        case "ID:6, Item: Scorpion Studio Album CD Disc":
          item6();
          break;

        case "ID:7, Item: GitHub Developer Plan Promo Code":
          item7();
          break;

        case "ID:8, Item: Apple Developer Membership Promo Code":
          item8();
          break;
      }
    });
}

// Each item# function are nearly identical, presently I haven't found a clean way to write the function once and have it loop through each item.
function item1() {
  connection.query("SELECT * FROM products WHERE id = '1'", function(err, res) {
    // Converting the price of the item from an array to an integer
    let formattedPrice1 = JSON.stringify(res);
    let formattedPrice2 = formattedPrice1.slice(91);
    let formattedPrice3 = parseInt(formattedPrice2);
    console.log("*** Please note that the price per unit is: $" + formattedPrice3 + " ***");
  });
  inquirer.prompt({
      name: "stock_quantity",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE id = '1'", function(err, res) {
        if (err) throw err;
        // Converting the user's choice for the quantity desired
        let formattedAnswer1 = JSON.stringify(answer);
        let formattedAnswer2 = formattedAnswer1.slice(19);
        let formattedAnswer3 = parseInt(formattedAnswer2);

        // Converting the amount currently in stock from an array to an integer
        let formattedRes1 = JSON.stringify(res);
        let formattedRes2 = formattedRes1.slice(111);
        let formattedRes3 = parseInt(formattedRes2);

        // We need to create the formatted price again since this function doesn't have access to the variable above
        let formattedPrice1 = JSON.stringify(res);
        let formattedPrice2 = formattedPrice1.slice(91);
        let formattedPrice3 = parseInt(formattedPrice2);

        // If the user asks for a quantity that is greater than what is in stock then notify the user
        if (formattedAnswer3 > formattedRes3) {
          console.log("Insufficent quantity! You asked for " + formattedAnswer3 +" but we only have " + formattedRes3);
          console.log("Would you like to purchase something else?");
          initialPrompt();
        } else {
          connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = '1'",
            [formattedAnswer3],
            function(err, res) {
              if (err) throw err;
              let totalSpent = formattedAnswer3 * formattedPrice3;
              console.log("Thank you for your order! Your payment method has been charged: $" + totalSpent);
            }
          );
          connection.end();
        }
      });
    });
}


function item2() {
  connection.query("SELECT * FROM products WHERE id = '2'", function(err, res) {
    // Converting the price of the item from an array to an integer
    let formattedPrice1 = JSON.stringify(res);
    let formattedPrice2 = formattedPrice1.slice(75);
    let formattedPrice3 = parseInt(formattedPrice2);
    console.log("*** Please note that the price per unit is: $" + formattedPrice3 + " ***");
  });
  inquirer.prompt({
      name: "stock_quantity",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE id = '2'", function(err, res) {
        if (err) throw err;
        // Converting the user's choice for the quantity desired
        let formattedAnswer1 = JSON.stringify(answer);
        console.log(formattedAnswer1);
        let formattedAnswer2 = formattedAnswer1.slice(19);
        console.log(formattedAnswer2);
        let formattedAnswer3 = parseInt(formattedAnswer2);
        console.log(formattedAnswer3);

        // Converting the amount currently in stock from an array to an integer
        let formattedRes1 = JSON.stringify(res);
        console.log(formattedRes1);
        let formattedRes2 = formattedRes1.slice(95);
        console.log(formattedRes2);
        let formattedRes3 = parseInt(formattedRes2);
        console.log(formattedRes3);

        // We need to create the formatted price again since this function doesn't have access to the variable above
        let formattedPrice1 = JSON.stringify(res);
        let formattedPrice2 = formattedPrice1.slice(75);
        let formattedPrice3 = parseInt(formattedPrice2);

        // If the user asks for a quantity that is greater than what is in stock then notify the user
        if (formattedAnswer3 > formattedRes3) {
          console.log("Insufficent quantity! You asked for " + formattedAnswer3 +" but we only have " + formattedRes3);
          console.log("Would you like to purchase something else?");
          initialPrompt();
        } else {
          connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = '2'",
            [formattedAnswer3],
            function(err, res) {
              if (err) throw err;
              let totalSpent = formattedAnswer3 * formattedPrice3;
              console.log("Thank you for your order! Your payment method has been charged: $" + totalSpent);
            }
          );
          connection.end();
        }
      });
    });
}

function item3() {
  connection.query("SELECT * FROM products WHERE id = '3'", function(err, res) {
    // Converting the price of the item from an array to an integer
    let formattedPrice1 = JSON.stringify(res);
    let formattedPrice2 = formattedPrice1.slice(91);
    let formattedPrice3 = parseInt(formattedPrice2);
    console.log("*** Please note that the price per unit is: $" + formattedPrice3 + " ***");
  });
  inquirer.prompt({
      name: "stock_quantity",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE id = '3'", function(err, res) {
        if (err) throw err;
        // Converting the user's choice for the quantity desired
        let formattedAnswer1 = JSON.stringify(answer);
        let formattedAnswer2 = formattedAnswer1.slice(19);
        let formattedAnswer3 = parseInt(formattedAnswer2);

        // Converting the amount currently in stock from an array to an integer
        let formattedRes1 = JSON.stringify(res);
        let formattedRes2 = formattedRes1.slice(111);
        let formattedRes3 = parseInt(formattedRes2);

        // We need to create the formatted price again since this function doesn't have access to the variable above
        let formattedPrice1 = JSON.stringify(res);
        let formattedPrice2 = formattedPrice1.slice(91);
        let formattedPrice3 = parseInt(formattedPrice2);

        // If the user asks for a quantity that is greater than what is in stock then notify the user
        if (formattedAnswer3 > formattedRes3) {
          console.log("Insufficent quantity! You asked for " + formattedAnswer3 +" but we only have " + formattedRes3);
          console.log("Would you like to purchase something else?");
          initialPrompt();
        } else {
          connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = '3'",
            [formattedAnswer3],
            function(err, res) {
              if (err) throw err;
              let totalSpent = formattedAnswer3 * formattedPrice3;
              console.log("Thank you for your order! Your payment method has been charged: $" + totalSpent);
            }
          );
          connection.end();
        }
      });
    });
}

function item4() {
  connection.query("SELECT * FROM products WHERE id = '4'", function(err, res) {
    // Converting the price of the item from an array to an integer
    let formattedPrice1 = JSON.stringify(res);
    let formattedPrice2 = formattedPrice1.slice(91);
    let formattedPrice3 = parseInt(formattedPrice2);
    console.log("*** Please note that the price per unit is: $" + formattedPrice3 + " ***");
  });
  inquirer.prompt({
      name: "stock_quantity",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE id = '4'", function(err, res) {
        if (err) throw err;
        // Converting the user's choice for the quantity desired
        let formattedAnswer1 = JSON.stringify(answer);
        let formattedAnswer2 = formattedAnswer1.slice(19);
        let formattedAnswer3 = parseInt(formattedAnswer2);

        // Converting the amount currently in stock from an array to an integer
        let formattedRes1 = JSON.stringify(res);
        let formattedRes2 = formattedRes1.slice(111);
        let formattedRes3 = parseInt(formattedRes2);

        // We need to create the formatted price again since this function doesn't have access to the variable above
        let formattedPrice1 = JSON.stringify(res);
        let formattedPrice2 = formattedPrice1.slice(91);
        let formattedPrice3 = parseInt(formattedPrice2);

        // If the user asks for a quantity that is greater than what is in stock then notify the user
        if (formattedAnswer3 > formattedRes3) {
          console.log("Insufficent quantity! You asked for " + formattedAnswer3 +" but we only have " + formattedRes3);
          console.log("Would you like to purchase something else?");
          initialPrompt();
        } else {
          connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = '4'",
            [formattedAnswer3],
            function(err, res) {
              if (err) throw err;
              let totalSpent = formattedAnswer3 * formattedPrice3;
              console.log("Thank you for your order! Your payment method has been charged: $" + totalSpent);
            }
          );
          connection.end();
        }
      });
    });
}

function item5() {
  connection.query("SELECT * FROM products WHERE id = '5'", function(err, res) {
    // Converting the price of the item from an array to an integer
    let formattedPrice1 = JSON.stringify(res);
    let formattedPrice2 = formattedPrice1.slice(91);
    let formattedPrice3 = parseInt(formattedPrice2);
    console.log("*** Please note that the price per unit is: $" + formattedPrice3 + " ***");
  });
  inquirer.prompt({
      name: "stock_quantity",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE id = '5'", function(err, res) {
        if (err) throw err;
        // Converting the user's choice for the quantity desired
        let formattedAnswer1 = JSON.stringify(answer);
        let formattedAnswer2 = formattedAnswer1.slice(19);
        let formattedAnswer3 = parseInt(formattedAnswer2);

        // Converting the amount currently in stock from an array to an integer
        let formattedRes1 = JSON.stringify(res);
        let formattedRes2 = formattedRes1.slice(111);
        let formattedRes3 = parseInt(formattedRes2);

        // We need to create the formatted price again since this function doesn't have access to the variable above
        let formattedPrice1 = JSON.stringify(res);
        let formattedPrice2 = formattedPrice1.slice(91);
        let formattedPrice3 = parseInt(formattedPrice2);

        // If the user asks for a quantity that is greater than what is in stock then notify the user
        if (formattedAnswer3 > formattedRes3) {
          console.log("Insufficent quantity! You asked for " + formattedAnswer3 +" but we only have " + formattedRes3);
          console.log("Would you like to purchase something else?");
          initialPrompt();
        } else {
          connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = '5'",
            [formattedAnswer3],
            function(err, res) {
              if (err) throw err;
              let totalSpent = formattedAnswer3 * formattedPrice3;
              console.log("Thank you for your order! Your payment method has been charged: $" + totalSpent);
            }
          );
          connection.end();
        }
      });
    });
}


function item6() {
  connection.query("SELECT * FROM products WHERE id = '6'", function(err, res) {
    // Converting the price of the item from an array to an integer
    let formattedPrice1 = JSON.stringify(res);
    let formattedPrice2 = formattedPrice1.slice(91);
    let formattedPrice3 = parseInt(formattedPrice2);
    console.log("*** Please note that the price per unit is: $" + formattedPrice3 + " ***");
  });
  inquirer.prompt({
      name: "stock_quantity",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE id = '6'", function(err, res) {
        if (err) throw err;
        // Converting the user's choice for the quantity desired
        let formattedAnswer1 = JSON.stringify(answer);
        let formattedAnswer2 = formattedAnswer1.slice(19);
        let formattedAnswer3 = parseInt(formattedAnswer2);

        // Converting the amount currently in stock from an array to an integer
        let formattedRes1 = JSON.stringify(res);
        let formattedRes2 = formattedRes1.slice(111);
        let formattedRes3 = parseInt(formattedRes2);

        // We need to create the formatted price again since this function doesn't have access to the variable above
        let formattedPrice1 = JSON.stringify(res);
        let formattedPrice2 = formattedPrice1.slice(91);
        let formattedPrice3 = parseInt(formattedPrice2);

        // If the user asks for a quantity that is greater than what is in stock then notify the user
        if (formattedAnswer3 > formattedRes3) {
          console.log("Insufficent quantity! You asked for " + formattedAnswer3 +" but we only have " + formattedRes3);
          console.log("Would you like to purchase something else?");
          initialPrompt();
        } else {
          connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = '6'",
            [formattedAnswer3],
            function(err, res) {
              if (err) throw err;
              let totalSpent = formattedAnswer3 * formattedPrice3;
              console.log("Thank you for your order! Your payment method has been charged: $" + totalSpent);
            }
          );
          connection.end();
        }
      });
    });
}

function item7() {
  connection.query("SELECT * FROM products WHERE id = '7'", function(err, res) {
    // Converting the price of the item from an array to an integer
    let formattedPrice1 = JSON.stringify(res);
    let formattedPrice2 = formattedPrice1.slice(91);
    let formattedPrice3 = parseInt(formattedPrice2);
    console.log("*** Please note that the price per unit is: $" + formattedPrice3 + " ***");
  });
  inquirer.prompt({
      name: "stock_quantity",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE id = '7'", function(err, res) {
        if (err) throw err;
        // Converting the user's choice for the quantity desired
        let formattedAnswer1 = JSON.stringify(answer);
        let formattedAnswer2 = formattedAnswer1.slice(19);
        let formattedAnswer3 = parseInt(formattedAnswer2);

        // Converting the amount currently in stock from an array to an integer
        let formattedRes1 = JSON.stringify(res);
        let formattedRes2 = formattedRes1.slice(111);
        let formattedRes3 = parseInt(formattedRes2);

        // We need to create the formatted price again since this function doesn't have access to the variable above
        let formattedPrice1 = JSON.stringify(res);
        let formattedPrice2 = formattedPrice1.slice(91);
        let formattedPrice3 = parseInt(formattedPrice2);

        // If the user asks for a quantity that is greater than what is in stock then notify the user
        if (formattedAnswer3 > formattedRes3) {
          console.log("Insufficent quantity! You asked for " + formattedAnswer3 +" but we only have " + formattedRes3);
          console.log("Would you like to purchase something else?");
          initialPrompt();
        } else {
          connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = '7'",
            [formattedAnswer3],
            function(err, res) {
              if (err) throw err;
              let totalSpent = formattedAnswer3 * formattedPrice3;
              console.log("Thank you for your order! Your payment method has been charged: $" + totalSpent);
            }
          );
          connection.end();
        }
      });
    });
}

function item8() {
  connection.query("SELECT * FROM products WHERE id = '8'", function(err, res) {
    // Converting the price of the item from an array to an integer
    let formattedPrice1 = JSON.stringify(res);
    let formattedPrice2 = formattedPrice1.slice(91);
    let formattedPrice3 = parseInt(formattedPrice2);
    console.log("*** Please note that the price per unit is: $" + formattedPrice3 + " ***");
  });
  inquirer.prompt({
      name: "stock_quantity",
      type: "input",
      message: "What quantity of this item would you like to purchase?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE id = '8'", function(err, res) {
        if (err) throw err;
        // Converting the user's choice for the quantity desired
        let formattedAnswer1 = JSON.stringify(answer);
        let formattedAnswer2 = formattedAnswer1.slice(19);
        let formattedAnswer3 = parseInt(formattedAnswer2);

        // Converting the amount currently in stock from an array to an integer
        let formattedRes1 = JSON.stringify(res);
        let formattedRes2 = formattedRes1.slice(111);
        let formattedRes3 = parseInt(formattedRes2);

        // We need to create the formatted price again since this function doesn't have access to the variable above
        let formattedPrice1 = JSON.stringify(res);
        let formattedPrice2 = formattedPrice1.slice(91);
        let formattedPrice3 = parseInt(formattedPrice2);

        // If the user asks for a quantity that is greater than what is in stock then notify the user
        if (formattedAnswer3 > formattedRes3) {
          console.log("Insufficent quantity! You asked for " + formattedAnswer3 +" but we only have " + formattedRes3);
          console.log("Would you like to purchase something else?");
          initialPrompt();
        } else {
          connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = '8'",
            [formattedAnswer3],
            function(err, res) {
              if (err) throw err;
              let totalSpent = formattedAnswer3 * formattedPrice3;
              console.log("Thank you for your order! Your payment method has been charged: $" + totalSpent);
            }
          );
          connection.end();
        }
      });
    });
}