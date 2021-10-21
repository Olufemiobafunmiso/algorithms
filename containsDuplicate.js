/**
 * 
 * @param {Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true} nums 
 * @returns 
 */



const containsDuplicate = (nums)=>{

if(!nums.length){
    return false
}
//sort array
let sortArr = nums.sort((a,b)=>{
    return a-b
})

for(let i=0; i<sortArr.length; i++){
    if (sortArr[i]===sortArr[i-1]){
        return true
    }
}
return false

}
containsDuplicate([1,2,3,1])