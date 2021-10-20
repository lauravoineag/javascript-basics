const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
  } 
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]){
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
  if (person.age > 65){
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  let peopleAges = [];
  for (let i=0; i<people.length; i++) {
    peopleAges.push(people[i].age);
  }
  return peopleAges;
};

const findByName = (name, people) => {
  for(let i=0; i < people.length; i++){
    if (name === people[i].name) {
      return people[i];
    } 
  }
};

const findHondas = cars => {
  let hondaList = [];
  for (i = 0;i < cars.length; i++){
    if(cars[i].manufacturer==="Honda"){
      hondaList.push(cars[i])
    }
  }
  return hondaList;
};

const averageAge = people => {
  let sumAge = 0;
  for (i = 0; i < people.length; i++){
    sumAge+=people[i].age;
  }
  return sumAge/people.length;
};

const createTalkingPerson = (name, age) => {
  let person = {
    name:name,
    age:age,
    introduce: function(friendName){
      return "Hi "+ friendName +", " + "my name is" + " "+ this.name + " and I am" + " "+ this.age+"!";
    }
  }
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
