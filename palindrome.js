//================PALINDROME ===============//

const palindrome = (word)=>{
let result;
/**
 * TODOs
 * Stringify word
 * convert to lowercase
 * strip out alphanumerics with match [returns array]
 * join the array string
 * 
 */
const isPalindrome = `${word}`.toLowerCase().match(/[a-z0-9]/g)

result =  (isPalindrome.join('') === isPalindrome.reverse().join('')) ? true:false
return result
}
palindrome("oba")
