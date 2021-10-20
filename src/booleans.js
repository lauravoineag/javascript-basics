function negate(a) {
  if (a===true || a===false){
    return !a;
  }
};

function both(a, b) {
  if (a===true && b===true){
    return true;
  } else {
    return false;
  }
};

function either(a, b) {
  if (a===true || b===true){
    return true;
  } else {
    return false;
  }
};

function none(a, b) {
  if (a!==true && b!==true){
    return true;
  } else {
    return false;
  }
};

function one(a, b) {
    if (a===true){
      return b===false;
    } else{
    if (a===false){
      return b===true;
    }}
};

function truthiness(a) {
  return !!a;
  // return Boolean(a);
  // if(a) {
  //   return true;
  // } else {
  //   return false;
  // }
  // if(a === "" || a === 0 || a===null || a === undefined || Number.isNaN(a)) {
  //   return false;
  // } else {
  //   return true;
  // }
};

function isEqual(a, b) {
  return a === b;
  // if (a === b){
  //   return true;
  // } else {
  //   return false;
  // };
};

function isGreaterThan(a, b) {
  return a > b;
  // if(a>b){
  //   return true;
  // }else{
  //   return false;
  // }
};

function isLessThanOrEqualTo(a, b) {
  if(a<=b){
    return true;
  }else{
    return false;
  }
};

function isOdd(a){
  return Math.abs(a%2)==1;
};

function isEven(a) {
  if (a%2 == 0)
		return true;
	else
		return false;
};

function isSquare(a) {
  if (Math.sqrt(a)%1===0){
    return true;
    }else if (a===NaN){
      return false;
    } else {
    return false;
  }
};

function startsWith(char, string) {
  if(string.startsWith(char)){
    return true;
  }else{
    return false;
  }
};

function containsVowels(string) {
  const vowelList = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i++) {
    if (vowelList.includes(string[i].toLowerCase())) {
      return true;
    }
  }
  return false;
  };

function isLowerCase(string) {
  if(string==string.toLowerCase()){
    return true;
  }else {
    return false;
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
