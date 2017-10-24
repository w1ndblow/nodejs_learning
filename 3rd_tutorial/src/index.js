import SubstitutionCipher from './substutioncipcher';
import {one, two, three, four, five, six, seven, eight, nine, plus, minus, dividedBy, times} from './calcoperations';
import makeBuffer from './makebuffer';

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);

console.log(sub.encode("abc")) // => "eta"
console.log(sub.encode("xyz")) // => "qxz"
console.log(sub.encode("aeiou")) // => "eirfg"

console.log(sub.decode("eta")) // => "abc"
console.log(sub.decode("qxz")) // => "xyz"
console.log(sub.decode("eirfg")) // => "aeiou

console.log(one(plus(one())));
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

console.log(buffer());

buffer.clear();

console.log(buffer());
