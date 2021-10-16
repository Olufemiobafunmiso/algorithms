const isAnagram = (first_word, second_word)=>{
//normalize string
const normalize = (str)=>{
return `${str}`.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
}

return normalize(first_word)===normalize(second_word)
}
