const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }

    getName() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: `What is the ${this.getRole()}'s name?`,
                validate: function(name)
                {
                    if (name) {
                        return true;
                    } else {
                    console.log('*--Please enter a Name!');
                    return false;
                    }
                }
            }
        ])
    };
    getID() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'id',
                message: `What is the ${this.getRole()}'s ID?`,
                validate: function(id)
                {
                    if (id) {
                        return true;
                    } else {
                    console.log('*--Please enter a valid Employee ID!');
                    return false;
                    }
                }
            }
        ])
    };
    getEmail() {
        return email;
    };
    
    getRole() {
        return 'Employee';
    };

}
// newEmploy = new Employee();
// newEmploy.getName();
module.exports = Employee;
