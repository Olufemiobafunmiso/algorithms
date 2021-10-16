/**
 * Given a string of text containing 0 or more vowels, 
 * count the number of vowels that can be found within the text
 */



const vowelsCounter =(str)=>{
    let vowels = {"a":1,"e":1,"i":1,"o":1,"u":0}
    let counter = 0
    let normalize = `${str}`.toLowerCase().split("")
    normalize.forEach((value,_)=>{
  if(vowels[value]){
    counter++
  }
    })
  
    return counter
  }
  console.log(vowelsCounter("zyw"))