const Employee = require('../lib/Employee');


test('creates a employee object', () => {
    const employee = new Employee('Joe',0,'fakemail@hotmail.com');
  
    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
//console.log(employee);
});
test('gets role', () => {
    const employee = new Employee('Joe',0,'fakemail@hotmail.com');
  
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
  });
//   test('gets ID', () => {
//     const employee = new Employee('Joe');
  
//     expect(employee.getID()).toEqual(expect.any(Number));
//   });