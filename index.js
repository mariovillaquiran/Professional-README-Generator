// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const markdownpath = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Provide description of your project",
  },

  {
    type: "input",
    name: "installation",
    message: "What steps are required to install your project?",
  },

  {
    type: "input",
    name: "usage",
    message: "Provide examples for use (recording/screengrabs/etc)",
  },

  {
    type: "list",
    name: "license",
    message:
      "Provide any licenses to let people know what they can and cannot do with your project",
    choices: ["MIT", "none", "Apache", "Mozilla Public"],
  },

  {
    type: "input",
    name: "features",
    message: "Use this features section if you have a long list of features",
  },

  {
    type: "input",
    name: "contributing",
    message:
      "Let other developers know how to contribute to your project (optional)",
  },

  {
    type: "input",
    name: "tests",
    message: "Provide written tests for your project (optional)",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("readme.md", markdownpath({ ...answers }));
  });
}

// Function call to initialize app
init();
