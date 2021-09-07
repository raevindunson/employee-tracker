// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const Connection = require("mysql2/typings/mysql/lib/Connection");
const Query = require("mysql2/typings/mysql/lib/protocol/sequences/Query");

// Prompts

function Prompt() {
    inquirer
    .prompt({
        type: "list",
        name: "functions",
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "Add Employee",
            "Remove Employee",
            "Update Employee",
            "Quit"
        ]
    })
    .then((choice) => {
        switch (choice) {
        case "View Employees":
            ViewEmployees();
        case "Add Employee":
            AddEmployee();
        case "Remove Employee":
            RemoveEmployee();
        case "Update Employee":
            UpdateEmployee();
        case "Quit":
            Quit();
        }});
};

function ViewEmployees() {
    console.log("View Employees");
    Connection.createQuery(Query, function(err, res) {
        if (err) throw err;
        console.table(res);
        Prompt();
    })
}

function AddEmployee() {
    console.log("Add Employee");
    Connection.Query(Query, function(err, res) {
        console.table(res);
        console.log("Emplloyee Added!");
    })
}