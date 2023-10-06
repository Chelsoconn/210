const LOWERBOUND = 'a'.charCodeAt();
const UPPERBOUND = 'z'.charCodeAt();
const UPLOWERBOUND = 'A'.charCodeAt();
const UPUPPERBOUND = 'Z'.charCodeAt();

function rot13(sentence) {
  let arr = sentence.split('');
  let rotated = '';
  let newArr = arr.map (char => char.charCodeAt());

  newArr.forEach (function(num) {
    if (num >= LOWERBOUND && num <= UPPERBOUND) {
      num = rotateString(num, LOWERBOUND, UPPERBOUND);
      rotated += String.fromCharCode(num);
    } else if ((num >= UPLOWERBOUND && num <= UPUPPERBOUND)) {
      num = rotateString(num, UPLOWERBOUND, UPUPPERBOUND);
      rotated += String.fromCharCode(num);
    } else {
      rotated += String.fromCharCode(num);
    }
  })
 return rotated;
}

function rotateString (number, lower, upper) {
  number += 13;
  if (number > upper) {
    number = number - upper + lower - 1;
  }
  return number;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));