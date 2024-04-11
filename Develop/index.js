// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: [
        'MIT',
        'GPL', 
        'Apache', 
        'BSD', 
        'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {


        //the inquirer.prompt() method takes in an array of questions and returns a promise.
    inquirer.prompt(questions).then((answers) => 
    {
        const readme = `     
<h1 align="center">${answers.title}</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
    
## Description
🔍 ${answers.description}
    
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
    
## Installation
💾 ${answers.installation}
    
## Usage
💻 ${answers.usage}
    
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
    
## Contributing
${answers.contribution}
    
## Tests
✏️ ${answers.test}
    
Find me on GitHub: [${answers.github}](https://github.com/${answers.github})<br />
<br />
✉️ Email: ${answers.email}<br /><br />
    
        `;


        writeToFile('../README.md', readme);
        console.log('✔️  Successfully wrote to README.md');

    });

}

// Function call to initialize app
init();
