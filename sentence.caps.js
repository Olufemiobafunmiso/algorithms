const sentenceCaps = (words)=>{
    let sanitize = `${words}`.toLowerCase().split(" ")
    let wordsArr = []
    sanitize.forEach((value,index)=>{
      wordsArr.push(`${value[0]}`.toUpperCase() + value.slice(1))
    })
    return wordsArr.join(' ')
    }
    sentenceCaps('work hard, play hard!')