/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let freq1 = getFrequencyObject(str1)
  let freq2 = getFrequencyObject(str2)
  console.log(freq1)
  console.log(freq2)
  return shallowEqual(freq1, freq2)  
}

const getFrequencyObject = str => {
  let charObject = {}
  for(let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();
    if(charObject[i]) {
      charObject[char]++;
    } else {
      charObject[char] = 1;
    }
  }
  return charObject;
}

function shallowEqual(a, b) {
  return Object.entries(a).sort().toString()===
  Object.entries(b).sort().toString();
}

module.exports = isAnagram;
