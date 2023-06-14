function isPalindrome(word) {
  const formattedStr = word.toLowerCase();
  return formattedStr === formattedStr.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  function isPalindrome(argument) {
    new variable formattedStr = take the word input from the user and make it all lower case
    if the formattedStr is equal to formattedStr in reverse, then return it and say true
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
