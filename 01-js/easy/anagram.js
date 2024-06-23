/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let mp = new Map()
    for(let c of str1.toLowerCase()) {
        mp.set(c, (mp.get(c) ?? 0) + 1)
    }
    for(let c of str2.toLowerCase()){
        mp.set(c, (mp.get(c) ?? 0) - 1)
    }
    return Array.from(mp.values()).every(x => x == 0)
}

console.log(isAnagram('abc!', '!cba'))
module.exports = isAnagram;
