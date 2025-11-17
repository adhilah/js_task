function vowel(str){
    // let s=str.includes("a","e", "i", "o", "u")
    return /[aeiou]/i.test(str)
}
console.log(vowel("jjjff"))