import {one, two, three, four, five, six, seven, eight, nine, plus, minus, dividedBy, times} from '../src/calcoperations.js';

describe('Calculation', function() {

  it('should be 35', function()  {
    expect(seven(times(five()))).toBe(35);
  });
  it('should be 13', function()  {
    expect(four(plus(nine()))).toBe(13);
  });
  it('should be 5', function()  {
    expect(eight(minus(three()))).toBe(5);
  });
  it('should be 3', function()  {
    expect(six(dividedBy(two()))).toBe(3);
  });
  
});
