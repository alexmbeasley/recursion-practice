// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case 
 if(n === 0){
  return 1;
 }
//recursion, check if positive num
 if(n > 0){
  return n * factorial(n - 1);
 }
//return null if neg
 return null;
};

/**
 * BASE/FALSE
 * RECURSE n is 5
 *  return 5 * factorial(5 - 1)
 * BASE/FALSE
 * RECURSE n is 4
 *  return 5 * 4 * facotrial(4 -1)
 * BASE/FALSE
 * RECURE n is 3
 *  return 5 * 4 * 3 * factorial(3 - 1)
 * BASE/FALSE
 * RECURSE n is 2
 *  return 5 * 4 * 3 * 2 * facotiral(2 -1)
 * BASE/FALSE
 * RECURSE n is 1
 *  reutn 5 * 4 * 3 * 2 * 1 * factorial (1 -1)
 * BASE/True
 * return 1
 * final return 5 * 4 * 3 * 2 * 1 * 1
 * 
 */

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if(array.length === 0){
    return 0;
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0){
    return true;
  }

  if(n === 1){
    return false;
  }

  if (n < 0){
    return isEven(-n);
  }

  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0){
    return 0;
  } else if (n > 0) {
    return n - 1 + sumBelow(n - 1);
  } else {
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    if (x === y){
      return [];
    } else if(x + 1 === y){
      return [];
    } else if(x - 1 === y){
      return [];
    }
    
    if (x < y) {
      let arrRange = range(x + 1, y);
      arrRange.unshift(x + 1);
      return arrRange;
    } else {
      let arrRange = range(x - 1, y);
      arrRange.unshift(x - 1);
      return arrRange;
    }
  };

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if(exp < 0){
    return 1 /exponent(base, -exp);
  }
  
  return base * exponent(base, exp - 1);
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1){
    return true;
  }

  if (n < 1){
    return false;
  } 

  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if(string.length === 0){
    return '';
  }
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  let strCap = string.toLowerCase().replace(/\s/g, '');
    if(strCap.length === 1) {
      return true;
    }
    if(strCap.length === 2) {
      return strCap[0] === strCap[1];
    }
    if(strCap[0] === strCap.slice(-1)) {
      return palindrome(strCap.slice(1,-1))
    }
    return false;
};
  
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
//already done
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
//multiply(2, 4); // 2 + 2 + 2 + 2
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  
  if (y > 0) {
    return x + multiply(x, y - 1);
  }
  
  if (y < 0) {
    return -multiply(x, -y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
//already done
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
//already done
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2) {
  //base case if the lengths are not equal return false
 
  //base case if strings are empty, return true
   if (str1 === '' && str2 === '') {
    return true;
  }
  //recursion if the first element of each string is equal return, recurse through
  if (str1[0] === str2[0]) {
    //with each element sliced off
    return compareStr(str1.slice(1), str2.slice(1));
  } 
  if (str1.length !== str2.length) {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base case if string lenght is zero, return empty array
  if(str.length === 0){
    return [];
  } 
    //isolate the first character
    let first = str.charAt(0);
    //slice off the old character
    let newStr = str.slice(1);
    //recurse pass the new string bac through
    let newArr = createArray(newStr);
    //add the new char to the begining of array
    newArr.unshift(first);
    //return the new array
    return newArr;
  
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //base case if array is zero, return blank array
  if(array.length === 0){
    return [];
  } 
    //isolate the first element in array
    let first = array[0];
    //slice off the old one
    let newStr = array.slice(1);
    //recusion, pass the new array back through
    let newArr = reverseArr(newStr);
    //push the new element to the rear
    newArr.push(first);
    //return the new array
    return newArr;
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base case if lenght is zero, return blank array
  if (length === 0) {
    return [];
  } 
    //recurse, pass the given value with the total length subtract one
    let newArr = buildList(value, length - 1);
    //push the new value to the end
    newArr.push(value);
    //return array
    return newArr;
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //base case if array length is zero, return zero since looking for a value
  if(array.length === 0){
    return 0;
  } 
    //isolate first element of array
    let first = array[0];
    //slice off the first element
    let newArr = array.slice(1);
    //recurse, passe back through the new array with the sliced value
    let counter = countOccurrence(newArr, value);

    //check if the first element equals the givne value
    if(first === value){
      //if it does increment by one
      return counter + 1;
      //if not return the counter
    } else {
      return counter;
    }
  
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  //base case, if the the lenght of the given array is zero return the output(blank arr)
  if (array.length === 0){
    return output;
  } 
    //isolate the first array element
    let first = array[0];
    //slice the old
    let newArr = array.slice(1);
    //use the callback function pass the isolated element through
    let mapped = callback(first);
    //push the value into the given output array
    output.push(mapped);
    //recurse, pass the new array, the given callbakc and the mutated output
    return rMap(newArr, callback, output);
  
  
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
//already done
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
//already done
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
//already done
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
//already done
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
var nthFibo = function(n) {
  //if n is less than zero reutn null
  if (n < 0) {
    return null;
    //if it is zero return 0
  } else if (n === 0) {
    return 0;
    //if it is one index return 1
  } else if (n === 1) {
    return 1;
    //recurse through 
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //base case if the input length gets to zero, return empty array
  if (input.length === 0) {
    return [];
  } 
  // isolate first element and set entire thing to upper
    let first = input[0].toUpperCase();
    //slice off the old one
    let newArr = input.slice(1);
    //recurse combine new upper with the rest of the array
    return [first].concat(capitalizeWords(newArr));
  
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //base case if array is empty return the empty array 
  if(array.length === 0) {
    return [];
  } 
    //extract first element of the array
    let first = array[0];
    //set the first character to upper and slice off the old one
    let capWord = first.charAt(0).toUpperCase() + first.slice(1);
    //slice off the old element
    let newWords = array.slice(1);
    //recurse combine the capitial word with the rest of the array
    return [capWord].concat(capitalizeFirst(newWords));
  
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
//already done
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
//already done
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  //create the object if it does not exist
  if(!obj){
    obj = {};
  }
  //base case, once the string is empty return the obj
  if(str.length === 0){
    return obj;
  }
  //extract the first character of the string
  let first = str.charAt(0);

  //if the character key already exist in the object
  if(obj[first]){
    //increment by 1
    obj[first]++;
    //otherwise create the object and set new value to 1
  } else {
    obj[first] = 1;
  }
  //recurse and slice off the first character already in object
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //base case if list is zero return list
  if(list.length === 0){
    return list;
  }
  //extract first element of array
  let first = list[0];
  //recurse to create a new list
  let compressed = compress(list.slice(1));
  //need to check the elmeents in order to compress
  if(first === compressed[0]){
    //skip the element if they are equal
    return compressed;
  } else{
    //otherwise combine with the first elemnt with the new recursed list
    return [first].concat(compressed);
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
//already done
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base case if array is zero or has one element return the array
  if(array.length <= 1){
    return array;
  }
  //extract the first element
  let first = array[0];

  //create a new list with reucrsion
  let zeroList = minimizeZeroes(array.slice(1));

  //need to check if the first element is zero AND first element in new list is 0
  if(first === 0 && zeroList[0] === 0){
    //return list if true
    return zeroList;
    //otherwise if they are not 0 combine with the new recursed list
  } else {
    return [first].concat(zeroList);
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  }

  // Get the current element at index 0
  let first = array[0];

  // Determine the sign for the current element based on its index
  if (array.length % 2 === 0) {
    if (first < 0) {
      first *= -1;
    }
  } else {
    if (first > 0) {
      first *= -1;
    }
  }

  // Recursive call with the remaining array, skipping the first element
  let result = alternateSign(array.slice(1));

  // Remove excess zeroes by checking if the current element is not equal to 0
  if (first !== 0) {
    result.unshift(first);
  }

  return result;

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //base case once string is zero, return empty string
  if (str.length === 0){
     return '';
  }
  //recurse, create a new string to check
  let tempStr = numToText(str.substring(0, str.length-1));
  //create a replace varibale to check
  let replace;
  //switch statemt to run through the different numbers
  switch (str[str.length-1]) {
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
    default: replace = str[str.length-1];
      break;
  }
  //return the string plus the replace value
  return tempStr + replace;
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------