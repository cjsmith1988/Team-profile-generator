const Manager = require('../lib/Manager');


test('creates a employee object', () => {
    const manager = new Manager('Joe',0,'fakemail@hotmail.com');
  
    expect(manager.name).toBe('Joe');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
console.log(manager);
});
test('gets role', () => {
    const manager = new Manager('Joe',0,'fakemail@hotmail.com');
  
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
  });