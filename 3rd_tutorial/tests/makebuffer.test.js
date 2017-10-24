import makeBuffer from '../src/makebuffer.js';


var buffer = makeBuffer();


describe('Buffer', function() {
  var buffer = makeBuffer();
  it('should be string', function()  {
    buffer('Замыкания');
    buffer(' Использовать');
    buffer(' Нужно!');
    expect(buffer()).toBe('Замыкания Использовать Нужно!');
  });
  it('should be whole string', function()  {
    buffer.clear();
    expect(buffer()).toBe('');
  });

});
