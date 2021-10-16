const maxRecurringChar = (str)=>{
    let normalize = str.split("")
    let maxValue = 0
    let mostrecurring = ''
    let counter = {}
    normalize.forEach((element,index)=>{
      if(counter[element]){
        counter[element] ++ 
      }else{
        counter[element] = 1
      }
    })
  for(let val in counter){
   if(counter[val] > maxValue){
     maxValue = counter[val] 
     mostrecurring = val
   }
  }
  if(maxValue <=1){
    return "No recurring character"
  }
    
    return mostrecurring
  }
maxRecurringChar('obaa')