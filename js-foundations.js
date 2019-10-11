// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

const by3 = (num) => {
  return num%3 == 0 ? `${num} is divisible by 3`: `${num} is not divisible by 3`; 
}
console.log(by3(15));
console.log(by3(0));
console.log(by3(385));
console.log(by3(-7));

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

const helloMe = {
  firstName: 'Kalvin',
  lastName: 'Kang',
  sport: 'Bouldering',
  ethnicity: 'Korean',
  sentence: function() {
    return `Hello my name is ${this.firstName} ${this.lastName}, I'm ${this.ethnicity} and I enjoy ${this.sport} as a hobby.`
  }
}
console.log(helloMe.sentence());

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

const everyOther = (arr) => {
  let otherArr = arr.filter((x, y) => {
      return y%2 == 0
  })
  return otherArr.join(' ')
}
console.log(everyOther(randomNouns));

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const toCap = (arr) => {
  return arr.map(x => x[0].toUpperCase() + x.slice(1))
}
console.log(toCap(randomNouns));

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

const strLength = (arr) => {
  return arr.map((x) => {
    return x.length 
  })
}
console.log(strLength(randomNouns));


// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

const inOrder = (str) => {
  return str.split('').sort().join('')
}
console.log(inOrder(testString1));
console.log(inOrder(testString2));
console.log(inOrder(testString3));


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"


const inOrder2 = (str1, str2, str3) => {
  let newStr = str1.concat(str2, str3)

  let orderedStr = newStr.split('').sort().join('')

  return orderedStr
}
console.log(inOrder2(testString1, testString2, testString3));

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

const animalCount = (arr1, arr2) => {
  let newArr = arr1.map((x,y) => {
    return x +  ' ' + arr2[y] 
  }
 )
 return newArr.join(' ')
}
console.log(animalCount(amounts, animals))

// ----------------------------------------------------------------------------------------- //


const theWorstFunction = (arr1, arr2) => {
    const maybeEvenWorseFunction = (arr1, arr2) => {
      console.log(`${arr1} ${arr2}`);
    }
    maybeEvenWorseFunction(amounts[0],animals[0])
    maybeEvenWorseFunction(amounts[1],animals[0])
    maybeEvenWorseFunction(amounts[2],animals[0])
    maybeEvenWorseFunction(amounts[3],animals[0])
    maybeEvenWorseFunction(amounts[4],animals[0])
    maybeEvenWorseFunction(amounts[5],animals[0])
    maybeEvenWorseFunction(amounts[6],animals[0])
  }
theWorstFunction()

// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"


const animalCount2 = (arr1, arr2) => {

  return arr1.map((x, y) => {
    if (x <= 1) {
      arr2[y] = arr2[y].slice(0, arr2[y].length -1)
      let final = x + ' ' + arr2[y]
      return final;
    } else {
      let final =  x + ' ' + arr2[y]
      return final
    }
    }
  )
}
console.log(animalCount2(amounts, animals))
