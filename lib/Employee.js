const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }

    getName() {
        return this.name;
    };
    getID() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    
    getRole() {
        return 'Employee';
    };

}
// newEmploy = new Employee();
// newEmploy.getName();
module.exports = Employee;
