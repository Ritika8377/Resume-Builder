const inquirer = require("inquirer");

const cp = require('child_process')


function displayList() {
    inquirer
        .prompt([{
            type: "list",
            name: "selection",
            choices: ["About", "Skills", "Academics", "Projects"],
        }, ])
        .then(function(answer) {
            if (answer.selection == "About") {
                console.log(`A passionately curious Web developer 
           who just found out that making websites and seeing 
           the magic happen on the Internet is what excites him the most.`);
                displayNext()
            } else if (answer.selection == "Skills") {
                console.log("JavaScript, Java, C++, Python, React, React Native, Nodejs, Golang, Android");
                displayNext()
            } else if (answer.selection == "Academics") {
                cp.execSync('open -a "Google Chrome" https://ritika8377.github.io/')
                displayNext()
            } else if (answer.selection == "Projects") {
                cp.execSync('open -a "Google Chrome" https://github.com/Ritika8377 ')
                displayNext()
            }
        });
}


displayList()


function displayNext() {
    inquirer
        .prompt([{
            type: "list",
            name: "selection",
            choices: ["Go Back", 'Exit'],
        }, ])
        .then(function(answer) {
            if (answer.selection == "Go Back") {
                displayList()
            } else if (answer.selection == "Exit") {
                console.log('Resume Closed')
            }
        });
}