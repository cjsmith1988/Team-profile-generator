const Employee = require('../lib/Employee');


test('creates a employee object', () => {
    const employee = new Employee('Joe');
  
    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
//console.log(employee);
});
