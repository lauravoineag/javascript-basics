const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    return array[index % array.length];
  } else {
  return array[index];
  }
};

const arrayToCSVString = array => {
  let result = "";
  for (let i = 0; i < array.length; i++){
    result += array[i];
    if(i<array.length-1){
      result+=",";
    }
  }
  return result;
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
  
};

const addToArray2 = (element, array) => {
  let newArray = array.concat(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index,1);
  return array;
};

const numbersToStrings = numbers => {
  return numbers.map(element => element + "");
};

const uppercaseWordsInArray = strings => {
  return strings.map(element => element.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(element => element.split('').reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(element => element % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  let number = array[index]
  return array.filter(element=> element !== number);
};

const elementsStartingWithAVowel = strings => {
  let rex = /^[aeiou]/i;
  let results = strings.filter(element => rex.test(element));
  return results; 
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc,element)=> acc+element);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
