const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    }
    getGitHub() {
        return github;
    }
    getRole() {
      return 'Engineer';
    }
}
//  newEmploy = new Engineer();
//  newEmploy.getGitHub();
module.exports = Engineer;