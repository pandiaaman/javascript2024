console.log("hello arrays");

{
  let nums = [1, 2, 3, 4, 5];
  for (let num in nums) {
    //in is used with objects gives us the keys
    console.log(num);
  }
  for (let num of nums) {
    //of is used with arrays and strings
    console.log(num);
  }

  for (let i = 0; i < nums.length; i++) {
    console.log(`num: ${nums[i]}`);
  }
  //not preferred
  let values = ["aman", "pandia", 26, true];
  for (let value of values) {
    console.log(value);
  }

  console.log(values.length);
  console.log(values);
  console.log(typeof values);
  //arrays are mutable
}

{
  console.log("***");
  let arr1 = new Array(); //way to define an array
  arr1.push(2);
  arr1.push(5);
  arr1.push(10);
  console.log(arr1);

  //another way to define an array
  let arr2 = [];
  arr2.push(5);
  arr2.push(6);
  arr2.pop();
  console.log(arr2);
}

//practice questions
{
  //for a given array with marks [85,97,44,37,76,60] find avg marks
  let marks = [85, 97, 44, 37, 76, 60];
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  let avg = sum / marks.length;
  console.log(avg);
}

{
  //for a given array with prices of 5 items[250,645,300,900,50]
  //apply 10% off on each and store the values in the array

  let prices = [250, 645, 300, 900, 50];
  for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] - prices[i] / 10;
  }

  for (let price of prices) {
    console.log(price);
  }
}

//push pop and tostring
{
  let foodItems = ["chole", "bhature", "roti", "sabji"];
  foodItems.push("kheer");
  for (let item of foodItems) {
    console.log(item);
  }

  let poppedVal = foodItems.pop();
  console.log(`popped :: ${poppedVal}`);

  for (let item of foodItems) {
    console.log(item);
  }

  console.log(foodItems.toString());
}

//unshift shift
//unshift : add to start
//shift : remove from start
{
  let foodItems = ["chole", "bhature", "roti", "sabji"];
  foodItems.unshift("kheer");
  for (let item of foodItems) {
    console.log(item);
  }

  let poppedVal = foodItems.shift();
  console.log(`shifted :: ${poppedVal}`);

  for (let item of foodItems) {
    console.log(item);
  }

  console.log(foodItems.toString());
}

//concat: adds an array to an existing array and returns a NEW array
{
  let arr1 = [1, 2, 3, 4, 5];

  let arr2 = [5, 6, 7, 8];

  let concatArr = arr1.concat(arr2);
  console.log(concatArr);
  console.log(arr1);
  console.log(arr2);
}

//slice and splice
//slice makes no change in the original array
//splice method updates the original array

//splice is (index no, no of elements you want to delete after the index, values you want to add afterwards

//if we only pass one input to the splice, then it acts as slice
{
  let heroes = ["thor", "spiderman", "batman", "captain america", "antman"];
  let slicedHeroes = heroes.slice(1, 3);
  console.log(slicedHeroes);
  console.log(heroes);

  heroes.splice(1, 2, "anisha", "ayaz");
  console.log(heroes);
}
