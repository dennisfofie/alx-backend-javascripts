export default function appendToEachArrayValue(array, appendString) {
  let newArray = new Array();
  for (let element of array) {
    newArray += appendString + element + " ";
  }

  return newArray;
}
