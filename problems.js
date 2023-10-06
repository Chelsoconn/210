function checkGoldbach(number) {
  if (number < 4) {
    console.log(null)
    return
  } 
  arrOne = [2]
  for (let itOne = 3; itOne <= number; itOne +=2) {
    arrTwo = []
    if (itOne % 2 == 0) {
      continue
    } 
    for (let itTwo = 2; itTwo < itOne; itTwo += 1) {
      if (itOne % itTwo === 0) {
        arrTwo.push(itTwo)
      }
    }
   if (arrTwo.length === 0) {
    arrOne.push(itOne)
   }
  }
  arrThree= []
  arrOne.forEach(function(num) {
    for (let index = (arrOne.indexOf(num)); index < arrOne.length; index++) {
      let adding = num + arrOne[index]
      if (adding === number) {
        arrThree.push([num, arrOne[index]])
      }
    }
  })
  console.log(arrThree)
}

checkGoldbach(4)

//for adding the primes 
//if the number <= 4 we need to retun null
//we need to start an array with the number 2 included 
//we need to start iterating from 5 until the main number /2 by twos 

//make array for primes
//for figuring out the primes 
//we need to iterate through the numbers 2 and up to the number
//we need to see if the first iterated number is divisible by the next iterated number 
//if it is then we need to add it to the array for primes
//if the array of primes is empty than we can add that number to the first array

function generatePattern(num) {
  let starterArray = []
  for (let start = 1; start <= num; start++) {
    starterArray.push(start)
  }
  starterArray = starterArray.join('').length
  let arr = Array(starterArray).fill('*')

  let number = 1
  for (let starter = 0; starter < num; starter++) {
    let removeStar = String(number).length - 1

    if (starter <= arr.length) {
      while (removeStar > 0) {
        arr.pop()
        removeStar--
      }
    }

    arr[starter] = number 
    number++

   console.log(arr.join(''))
  }
  };
    

  generatePattern(80)

  function indexOf(firstString, secondString) {
    let ans = -1
    for (let ind = 0; ind < firstString.length; ind++) {
      if (firstString[ind] === secondString[0]) {
        let indTwo = 0
        ans = ind
        for (let index = ind; index < secondString.length + ind; index++) {
          if (firstString[index] !== secondString[indTwo]) {
            ans = -1
          }
          indTwo++
        }
        if (ans !== -1) {
          console.log(ans)
          return
        }
      }  
    }
    console.log(ans)
  }
  
  function lastIndexOf(firstString, secondString) {
    let ans = -1
    for (let ind = 0; ind < firstString.length; ind++) {
      if (firstString[ind] === secondString[0]) {
        let indTwo = 0
        ans = ind
        for (let index = ind; index < secondString.length + ind; index++) {
          if (firstString[index] !== secondString[indTwo]) {
            ans = -1
          }
          indTwo++
        }
      }  
    }
    console.log(ans)
  }
  
  
  
  // function lastIndexOf(firstString, secondString) {
  //   // statements
  // }
  
  indexOf('Some strings', 's');                      // 5
  indexOf('Blue Whale', 'Whale');                    // 5
  indexOf('Blue Whale', 'Blute');                    // -1
  indexOf('Blue Whale', 'leB');                      // -1
  
  lastIndexOf('Some strings', 's');                  // 11
  lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
  lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

  function trim(phrase) {
    let maxIndex = phrase.length - 1 
    if (maxIndex < 0) {
      console.log('')
      return
    }
    let startIndex = 0
    while (phrase[startIndex] === ' ') {
      startIndex++
    }
    
    let finalIndex = maxIndex 
    while (phrase[finalIndex] == ' ') {
      finalIndex-- 
    }
    let finalWord = ''
    for (let ind = startIndex; ind <= finalIndex; ind++) {
      finalWord += phrase[ind]
    } 
    console.log(finalWord)
    console.log(finalWord.length)
  }
  
  trim('  abc  ');  // "abc"
  trim('abc   ');   // "abc"
  trim(' ab c');    // "ab c"
  trim(' a b  c');  // "a b  c"
  trim('      ');   // ""
  trim('');         // ""

  function splitString(string, delimiter) {
    if (delimiter === undefined) {
      console.log('Error: No delimiter')
      return
    }
    let partialWord = ''
    for (let ind = 0; ind < string.length; ind++) {
      if (delimiter === '') {
        console.log(string[ind])
      } else if (string[ind] !== delimiter) {
        partialWord += string[ind]
        if (partialWord.length === string.length) {
          console.log(partialWord)
        }
      } else if (string[ind] === delimiter || ind === string.length-1) {
        console.log(partialWord)
        partialWord = ''
      }
    }
  }
  
  
  splitString('abc,123,hello world', ',');
  // logs:
  // abc
  // 123
  // hello world
  
  splitString('hello');
  // logs:
  // ERROR: No delimiter
  
  splitString('hello', '');
  // logs:
  // h
  // e
  // l
  // l
  // o
  
  splitString('hello', ';');
  // logs:
  // // hello
  
  splitString(';hello;', ';');
  // logs:
  //  (this is a blank line)
  // hello

  function repeat(string, times) {
    if (typeof(times) !== 'number' || times < 0) {
      console.log(undefined)
      return
    }
    let newString = ''
    for (let ind = times; ind > 0; ind--) {
      newString = newString.concat(string)
    }
    console.log(newString)
  }
  
  
  repeat('abc', 1);       // "abc"
  repeat('abc', 2);       // "abcabc"
  repeat('abc', -1);      // undefined
  repeat('abc', 0);       // ""
  repeat('abc', 'a');     // undefined
  repeat('abc', false);   // undefined
  repeat('abc', null);    // undefined
  repeat('abc', '  ');    // undefined

  function startsWith(string, searchString) {
    let searchStringLength = searchString.length 
    let newString = ''
    let ind = 0
    while (ind < searchStringLength) {
      newString += string[ind]
      ind++
    }
    console.log(newString === searchString)
  }
  
  let str = 'We put comprehension and mastery above all else';
  startsWith(str, 'We');              // true
  startsWith(str, 'We put');          // true
  startsWith(str, '');                // true
  startsWith(str, 'put');             // false
  
  let longerString = 'We put comprehension and mastery above all else!';
  startsWith(str, longerString);      // false

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