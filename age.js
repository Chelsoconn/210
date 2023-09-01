// let rlSync = require('readline-sync');

// let age = rlSync.question('How old are you?\n');


// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);



let age = Number(prompt('How old are you?\n'))


for (let initial = 10; initial <= 40; initial += 10) {
  console.log(`In ${initial} years, you will be ${age + initial} years old.`);
}