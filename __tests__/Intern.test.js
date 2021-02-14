const Intern = require('../lib/Intern');


test('creates a employee object', () => {
    const intern = new Intern('Joe',0,'fakemail@hotmail.com');
  
    expect(intern.name).toBe('Joe');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    console.log(intern);
});
test('gets role', () => {
    const intern = new Intern('Joe',0,'fakemail@hotmail.com');
  
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
  });