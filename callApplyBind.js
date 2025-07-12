const personA = {
  name: "Novak Djokovic",
  age: 38,
};

//function borrowing
printdetails = function (country, hobby) {
  console.log(
    `My name is ${this.name} and my age is ${this.age}. I'm from ${country} and my hobby is ${hobby}`
  );
};

const personB = {
  name: "Jannik Sinner",
  age: 25,
};

//call
printdetails.call(personA, "Serbia", "Playing Tennis");

//apply
printdetails.apply(personB, ["Italy", "Playing Tennis"]);

//bind
const bindFunc = printdetails.bind(personA, "Serbia", "Playing Tennis");
bindFunc();
