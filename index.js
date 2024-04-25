// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions =[ 
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description for your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What are the installation instructions for your project?',
            name: 'installInstructions',
        },
        {
            type: 'input',
            message: 'What would the user do with this project? Examples?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How can other contribute to your project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'How can the user test your project?',
            name: 'test',
        },
        {  
             type: 'list',
            message: 'What is the license used on this project?',
            name: 'license',
            choices: ["MIT License", "Apache License 2.0", "GNU General Public License (GPL) v3", "Mozilla Public License 2.0", "BSD 3-Clause License"],
        },
        {  
             type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubUser',
        },
        {  
             type: 'input',
            message: 'What your email address?',
            name: 'email',
        },
        
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
