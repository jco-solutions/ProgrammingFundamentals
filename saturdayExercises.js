var exerciseArray = ['dog', 'cat', 'bird'];
var array2 = ['pizza', 'eggs', 'bread'];

function getFirstElement(array) {
  console.log(array[0])
}

getFirstElement(array2);

function removeLastElement(array, element) {
  array.pop(element);
}

removeLastElement(exerciseArray, [1]);
console.log(exerciseArray);

let i = 0;
for (let i = 0; i <= 20; i++) {
  if ((i % 2) === 0) {
    console.log(i + " is even")
  }
}

let b = 0;

for (let b = 0; b <= 10; b++) {
  console.log(b * 9)
}




problemArray = [['lion', 'deer', 'sheep'], ['cub', 'fawn', 'lamb']]

for (let a = 0; a < problemArray.length; a++) {
  for (let b = 0; b < problemArray[a].length; b++) {
    console.log(problemArray[a][b])
  }
}

let f = 1
for (let f = 1; f <= 10; f++) {
  console.log(f)
}

function printSquare(size) {
  let square = ''
  for (let g = 1; g <= size; g++) {
    for (let j = 1; j <= size; j++) {
      square += '*'
    }
    square += '\n'
  }
  console.log(square)
}

printSquare(4)

function printBox(size) {

  let wall = "*";
  let int = " ";

  for (let h = 1; h <= size; h++) {
    let row = ""
    for (let k = 1; k <= size; k++) {
      if (h == 1 || h == size) {
        row = wall.repeat(size)
      } else {
        row = "*" + (' '.repeat(size - 2)) + '*'
      }
    }
    console.log(row);
  }
}
printBox(5);

function printBanner(str) {
  let border = '*'.repeat(str.length + 4)
  return `${border}\n* ${str} *\n${border}`
}

console.log(printBanner("Welcome to DigitalCrafts"))

function factors(num) {
  let factors = [];
  for (let x = 1; x <= num; x++) {
    if (num % x === 0) {
      factors.push(x);
    }
  }
  console.log(factors)
}

factors(124);

function cipher(sentence, offset) {
  let codedSentence = ""
  let capitalStartAscii = 65
  let capitalEndAscii = 90
  let lowerCaseStartAscii = 97
  let lowerCaseEndAscii = 122
  for (let letter = 0; letter <= sentence.length; letter++) {
    let letterCharCode = sentence.charCodeAt(letter)
    let isSpace = false
    if (letterCharCode === 32) {
      isSpace = true
    }
    if (isSpace == true) {
      codedSentence += " "
    } else {
      let newLetterCharCode = letterCharCode + offset
      if (newLetterCharCode > lowerCaseEndAscii) {
        newLetterCharCode = newLetterCharCode - lowerCaseEndAscii + lowerCaseStartAscii
      } else {
        if (newLetterCharCode > capitalEndAscii && newLetterCharCode < lowerCaseStartAscii) {
          newLetterCharCode = newLetterCharCode - capitalEndAscii + capitalStartAscii
        }
      }
      codedSentence += String.fromCharCode(newLetterCharCode)
    }
  }
  console.log(codedSentence);
}

cipher("I have a dog", 5)

cipher("N mfbj f itl", -5)

function positiveNumbers(startingArray) {
  let newArray = [];
  for (let q = 0; q <= startingArray.length; q++) {
    if (startingArray[q] > 0) {
      newArray.push(startingArray[q]);
    }
  }
  console.log(newArray);
}

positiveNumbers([-8, 6, -9, 7, -15, -19, 20]);