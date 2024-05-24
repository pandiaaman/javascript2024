console.log("hello functions");
//functions have function definition and function call

{
  fun1(1, 3); //functions are hoisted in javascript so we can call them before defining them, that how execution context works
  function fun1(x, y) {
    console.log(x + y);
  }
}

//arrow functions
{
  (a, b) => {
    return a + b;
  };
  //we can assign the above function a value as a const
  const fun1 = (x, y) => {
    //x and y are block scope and are accessible only within the functions
    console.log(x + y);
  };

  fun1(1, 4);
}

//return values from functions
{
  function fun2(x, y) {
    return x + y;
    //no lines should be written after the return
  }

  console.log(fun2(1, 2));
}

//function that returns the no of vowels in a string
{
  function checkVowels(str) {
    let vowels = 0;
    //using regex
    let pattern = /[aeiou]/;
    for (let ch of str) {
      if (pattern.test(ch)) {
        vowels++;
      }
    }
    console.log(`${str} has ${vowels} vowels`);
    return vowels;
  }

  checkVowels("aeiou");
  checkVowels("aman");
  checkVowels("aaaa");
  checkVowels("bbbb");
}

//ForEach function
//takes a callback function as a parameter
//arr.forEach(callback function)
///// HIGHER ORDER FUNCTION:functions that take other functions as parameters or return other functions
//example: forEach takes callback functions as a parameter and hence are higher order functions
{
  let arr = ["hello", "there", "how", "are", "you"];
  arr.forEach((val) => {
    console.log(val);
    console.log(val.length);
  });

  arr.forEach((val, idx) => {
    console.log(`${val} at ${idx}`);
  });
}

//some more array methods:
//map, filter

//map: very similar to forEach, goes to each index of the array and performs some logic
//map returns a new array whereas forEach does not return a new array
{
  //map
  let arr = [1, 2, 3, 4, 5, 6];
  let sum = 0;
  arr.map((val) => {
    sum += val;
  });
  console.log(sum);

  arr.map((val) => {
    console.log(`square of ${val} is ${val * val}`);
  });

  //map returning a new array
  let arr2 = arr.map((val) => {
    return val * 2;
  });
  console.log(arr2);
}

//filter method
//creates a new array for the elements that follow a given condition

{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  //these are all callback functions as they take the value in and filter based on the value
  let evenArr = arr.filter((val) => {
    return val % 2 == 0;
  });

  console.log(evenArr);

  let arrGreaterThanThree = arr.filter((val) => {
    return val > 3;
  });
  console.log(arrGreaterThanThree);
}

//reduce method
//performs a function or logic on a given array to reduce the given array to a single value

{
  //reduce
  //say we need to calculate the sum of the array values
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let sum = arr.reduce((res, val) => {
    //at first result will have first value of array (1) and val will have 2nd (2)
    return res + val;
  });
  console.log(sum);
}

//use reduce to calculate the greatest value
{
  let arr = [2, 4, 6, 1, 33, 7, 88, 9, 2, 211, 89];
  let greatestval = arr.reduce((prev, current) => {
    return prev > current ? prev : current;
  });
  console.log(greatestval);
}

//practice questionns

{
  //filter the marks of students that scored 90+
  let marks = [80, 91, 33, 85, 99, 100, 55, 64, 92];
  let marks90 = marks.filter((val) => {
    return val > 90;
  });
  console.log(marks90);
}
