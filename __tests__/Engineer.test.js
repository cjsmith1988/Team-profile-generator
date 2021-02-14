const Engineer = require('../lib/Engineer');


test('creates a engineer object', () => {
    const engineer = new Engineer('Joe',0,'fakemail@hotmail.com', 'joeHub');
  
    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
//console.log(engineer);
});
test('gets role', () => {
    const engineer = new Engineer('Joe',0,'fakemail@hotmail.com');
  
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
  });