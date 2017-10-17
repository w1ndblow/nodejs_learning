export default function transform(inputArray)
{
  let outputObject = {};
  const currentObject = {};

  for(let i=0;i < inputArray.length;i++){
        if (currentObject.hasOwnProperty(inputArray[i].date)) {
            currentObject[inputArray[i].date]['operations'].push(inputArray[i]);
            for(let j=0; j < inputArray[i].links.length; j++){
            if (currentObject[inputArray[i].date]['links'].indexOf(inputArray[i].links[j])) {
                currentObject[inputArray[i].date]['links'].push(inputArray[i].links[j]);
              }
            }
        }
        else {
          currentObject[inputArray[i].date]={};
          currentObject[inputArray[i].date]['operations']=[];
          currentObject[inputArray[i].date]['links']=[];
          currentObject[inputArray[i].date]['operations'].push(inputArray[i]);
          // костыль!
          //currentObject[inputArray[i].date]['links'].push(inputArray[i].links[0]);
          //currentObject[inputArray[i].date]['links'].concat(inputArray[i].links);
          for(let z=0; z < inputArray[i].links.length; z++){
              currentObject[inputArray[i].date]['links'].push(inputArray[i].links[z]);
          }
        }

  }

  return currentObject;
}
