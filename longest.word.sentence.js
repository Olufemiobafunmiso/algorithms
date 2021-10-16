const longestWord = (words)=>{
    let sanitize = `${words}`.split(" ")
    let maxCount = 0
    let longest = " "
    sanitize.forEach((value,index)=>{
     if(value.length>maxCount){
    maxCount = value.length
    longest = value
     }
    })
    return longest
    }
  longestWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit")