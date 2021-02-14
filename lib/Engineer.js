const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
      super(name);
      super(id);
      super(email);
      this.github;
    }
    getGitHub() {
        
    }
    getRole() {
      return return 'Engineer';
    }
}