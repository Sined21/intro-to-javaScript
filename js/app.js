'use strict';

(function () {
  const palindrome = () => {
    let steps = 0;

    const getPalindrome = (num) => {
      let reverse = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
      
      if (num !== reverse) {
        steps++;
        return getPalindrome(num + reverse);
      }

      return { result: num, steps };
    };

    return getPalindrome;
  };

  const palindromeInstance = palindrome();
  console.log(palindromeInstance(96));
})();
