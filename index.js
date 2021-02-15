const inquirer = require('inquirer');
const Page = require('./lib/Page');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-page.js');


//let role = 'Manager';


//new Page().initializeGame();

// Create an array of questions for user input
const promptUser = (employeeList, firstPass, role) => {
    if (!employeeList) {
        employeeList = [];
        firstPass = true;
        role = 'Manager';
        console.log(`
    ========================================================
    Welcome to The Team Profile Generator. Lets get Started!
    ========================================================
    `);
    } else {
        console.log(`
    ========================================================
    Additional Team Member:
    ========================================================
    `);

    }
    
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: `What is the ${role}'s name?`,
            validate: function(name)
            {
                if (name) {
                    return true;
                } else {
                console.log('*--Please enter a Name!');
                return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: `What is the ${role}'s ID?`,
            validate: function(id)
            {
                if (id) {
                    return true;
                } else {
                console.log('*--Please enter a valid Employee ID!');
                return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: `What is the ${role}'s Email Address?`,
            validate: function(email)
            {
                if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                    return true;
                  } else {
                    console.log('<--Please enter a VALID email address!');
                    return false;
                  }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: `What is the ${role}'s office phone number? with Area Code`,
            //regex validate phone # with country code
            when: () => { 
                if (firstPass){
                    return true;
                }},
            validate: office => {
                if (/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(office)) {
                return true;
                } else {
                console.log('<--Please enter a VALID phone number, include area code!');
                return false;
                }
            }
        },
        {
            type: 'input',
                name: 'userName',
                message: `What is the ${role}'s gitHub user name?`,
            //regex validate phone # with country code
            when: () => { 
                if (role === 'Engineer'){
                    return true;
                }},
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('*--Please enter a GitHub user name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
                name: 'school',
                message: `What is the ${role}'s School?`,
            //regex validate phone # with country code
            when: () => { 
                if (role === 'Intern'){
                    return true;
                }},
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('*--Please enter a school name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add an employee to your team?',
            default: true
        },
        {
            type: 'list',
            name: 'role',
            message: 'Pick a Role:',
            choices: ["Engineer", "Intern"],
            when: ({ confirmAdd }) => confirmAdd 
        }

    ])
    .then(employeeData => {
        if (firstPass){
            employeeList.push(new Manager(employeeData.name,employeeData.id,employeeData.email,employeeData.office));
            console.log(employeeData.role);
        } else if (role === 'Engineer'){
            employeeList.push(new Engineer(employeeData.name,employeeData.id,employeeData.email,employeeData.userName));
        } else if (role === 'Intern'){
            employeeList.push(new Intern(employeeData.name,employeeData.id,employeeData.email,employeeData.school));
        }

        if (employeeData.confirmAdd) {
            let firstPass = false;
            return promptUser(employeeList,firstPass,employeeData.role);
        } else {
            return employeeList;
        }
    });
};

function init() {
    
    //const employees
        promptUser()
        .then(data => {
            //return generatePage(data);
            console.log(data);
            return generatePage(data);
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .catch(err => {
            console.log(err);
          });       
}; 

init();