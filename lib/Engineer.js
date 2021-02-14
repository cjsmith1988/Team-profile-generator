const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    }
    getGitHub() {
        inquirer
        .prompt(
            {
                type: 'input',
                name: 'userName',
                message: `What is the ${this.getRole()}'s gitHub user name?`,
                validate: userNameInput => {
                  if (userNameInput) {
                    return true;
                  } else {
                    console.log('*--Please enter a GitHub user name!');
                    return false;
                  }
                }
            })
            // destructure name from the prompt object
            .then(({ userName }) => {
                this.github = userName;
                console.log(this);
                return this.github;
            });
    }
    getRole() {
      return 'Engineer';
    }
}
 newEmploy = new Engineer();
 newEmploy.getGitHub();
module.exports = Engineer;