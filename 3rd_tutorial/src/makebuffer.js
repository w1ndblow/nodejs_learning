export default function makeBuffer(){
  var strBuffer='';
  function buffer(subStr) {
    if (!subStr) { return strBuffer; }
    strBuffer+=subStr;
  };
  buffer.clear = function () {
      strBuffer = '';
      };
  return buffer;
}
