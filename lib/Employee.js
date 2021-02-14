const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }

    getName() {
        inquirer
        .prompt({
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
        })
        // destructure name from the prompt object
        .then(({ name }) => {
            this.name = name;
            console.log(this);
            return this.name;
        });
    };
    getID() {
        inquirer
        .prompt({
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
        })
        // destructure name from the prompt object
        .then(({ id }) => {
            this.id = id;
            return this.id;
        });
    };
    getEmail() {
        inquirer
        .prompt({
            type: 'text',
            name: 'email',
            message: `What is the ${this.getRole()}'s Email Address?`,
            validate: function(email)
            {
                if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                    return true;
                  } else {
                    console.log('<--Please enter a VALID email address!');
                    return false;
                  }
            }
        })
        // destructure name from the prompt object
        .then(({ email }) => {
            this.email = email;
            console.log(this);
            return this.email;
        }); 
    };
    getRole() {
        return 'Employee';
    };

}
// newEmploy = new Employee();
// newEmploy.getName();
module.exports = Employee;
