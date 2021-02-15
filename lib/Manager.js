const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
     }

    getOfficeNumber() {
        return officeNumber;
    }
  
    getRole() {
      return 'Manager';
    }
}
// newEmploy = new Manager();
// newEmploy.getOfficeNumber();
module.exports = Manager;