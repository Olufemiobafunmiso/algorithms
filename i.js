const list = [
    { color: 'white', size: 'XXL' },
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' }
  ]
console.time("sorting")
const arr = list.sort((a,b)=>(a.color > b.color)? 1:-1)
console.timeEnd("sorting")


let sentence= "I love JavaScript.";

// pattern that searches the first occurence of an uppercase character
let regExp = /[A-Z]/;

// searching for a match between regExp and given string 
let indexReg = sentence.search(regExp);

console.log(indexReg);

// Output: 0