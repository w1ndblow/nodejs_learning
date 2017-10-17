let str='ослик иа-иа смотрел на виадук';
let substring='иа';
function search(str, substring) {
    lastIndex = 0;
    foundIndex = str.indexOf(substring);
    do {
      lastIndex+=foundIndex;
      str=str.slice(foundIndex, str.length);
      alert(lastIndex.toString());
      foundIndex=str.indexOf(substring, substring.length);
    } while (foundIndex != -1 )
}

search(str, substring);
