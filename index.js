// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const markdownpath = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// add in the remaining questions below + review documentation 
const questions = [
    {
        type:"input",
        name: "title",
        message: "What is the title of your project?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
inquirer 
.prompt(questions) 
.then((answers) =>{
    writeToFile("readme.md",markdownpath({...answers}))
})
}

// Function call to initialize app
init();
