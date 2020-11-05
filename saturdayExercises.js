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
  for(let g = 1; g <= size; g++){
      for(let j = 1; j <= size; j++){
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
  let h = 1;
  let k = 1;

  for (h = 1; h <= size; h++) {
    let str = ""
    for (k = 1; k <= size; k++) {
      if (h == 1 || h == size ||
        k == 1 || k == size)
        str = str + wall
        else 
        str = str + int
    }
    console.log(str);
  }
}
printBox(5);

function printBanner(str){
  let border = '*'.repeat(str.length + 4)
  return `${border}\n* ${str} *\n${border}`
}

console.log(printBanner("Welcome to DigitalCrafts"))

var factors = (num) => {
  let fac = [], i = 1, ind = 0;
  
  while (i <= Math.floor(Math.sqrt(num))) {
    if (num%i === 0) {
      fac.splice(ind,0,i);
      if (i != num/i) {
        fac.splice(-ind,0,num/i);
      }
      ind++;
    }
    i++;
  }
  
  let temp = fac[fac.length - 1];
  fac[fac.length - 1] = fac[0];
  fac[0] = temp;
  
  return fac;
  };
  console.log(factors(100));