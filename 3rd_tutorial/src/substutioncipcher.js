export default function SubstitutionCipher(dict1, dict2) {
  this.dict1 = dict1;
  this.dict2 = dict2;

  this.encode = function(subs) {
      let newline= '';
      for(var i = 0; i < subs.length; i++){
          newline+=dict2[dict1.indexOf(subs[i])];
      }
      return newline
  }

  this.decode = function(subs) {
      let newline='';
      for(var i = 0; i < subs.length; i++){
          newline+=dict1[dict2.indexOf(subs[i])];
      }
      return newline
  }

}
