/*

"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("

*/

function narcomania(inputString){
let notUniqueChars='';
let uniqueChars='';
let result=inputString;



for (i = 0; i < inputString.length; i++) {
    currentChar=inputString[i].toLowerCase()
    if (uniqueChars.indexOf(currentChar) == -1 && notUniqueChars.indexOf(currentChar) == -1)
      {
        uniqueChars+=currentChar;
      }
    else if (uniqueChars.indexOf(currentChar) != -1)
      {
        notUniqueChars+=currentChar;
        uniqueChars=uniqueChars.replace(currentChar, '');
      }

    }

for (i = 0; i < inputString.length; i++) {
   currentChar=inputString[i].toLowerCase();
   if (notUniqueChars.indexOf(currentChar) != -1) {
       result=result.replace(inputString[i],')');
   }
   else {
       result=result.replace(inputString[i],'(');
   }
   }
  return result
}

alert(narcomania("din"));
alert(narcomania("recede"));
alert(narcomania("Success"));
alert(narcomania("(( @"));
