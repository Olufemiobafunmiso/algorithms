//================BINARY SEARCH O(log n) complexity ===============//
const binarySearch = (arr,target)=>{

    // Sort array
  let array = arr.sort((a,b)=>{
    return a-b
  })
  
    let begin = 0;
    let end = array.length-1 //Last index
    while (begin <= end){
      let mid_index = Math.floor((begin+end)/2);
      let guess = array[mid_index]
      if(target === guess){
        return mid_index
      }
      if(guess > target){
       end = mid_index-1 //Move left
      }else{
        begin = mid_index+1 //Move right
      }
    }
    return -1;
  }
  
  binarySearch([1, 6, 3, 2, 5], 90)