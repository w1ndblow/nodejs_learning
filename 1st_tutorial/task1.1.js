/*
parseAmount('10'); // -> 1000
parseAmount('10,5'); // -> 1050
parseAmount(10,55); // -> 1055
*/

function parseAmount(inputString){
  if (inputString.indexOf(',') != -1) {
  integerPart=inputString.substring(0, inputString.indexOf(','));
  fractionalPart=inputString.substring(inputString.indexOf(',')+1);
  if (fractionalPart.length == 1) {
    return integerPart+fractionalPart+'0';
  }
  else
    return integerPart+fractionalPart;
  }
  else {
  return inputString+'00';
  }
}

alert(parseAmount('10'));
alert(parseAmount('10,5'));
alert(parseAmount('10,55'));
