console.log("hello to the loops");

//for loops
{
  let n = 5;
  for (let i = 0; i < n; i++) {
    console.log("value: " + i);
  }

  for (let i = 1; ; i++) {
    //with no condition
    if (i == 10) {
      break;
    }
    console.log("valuee: " + i);
  }
}

{
  //sum of first n numbers
  let sum = 0;
  let n = 10;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
{
  //pattern
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      console.log(i + " " + j);
    }
  }
}

//while loop
{
  let n = 10;
  while (n > 0) {
    console.log("n: " + n);
    n--;
  }
}

//do while loop
{
  let n = 10;
  do {
    console.log("n1: " + n);
    n--;
  } while (n > 0);
}

//--> for of loop
//used in strings and arrays
{
  let str = "aman pandia";
  for (let c of str) {
    console.log(c);
  }

  let arr = [1, 2, 3, 4, 5];
  for (let n of arr) {
    console.log(n);
  }
}

//--> for in loop
//for getting keys of the objects
{
  const stud = {
    name: "aman pandia",
    age: 26,
    rollno: 2,
  };

  console.log(stud);

  for (let key in stud) {
    console.log(key + " : " + stud[key]);
  }
}

//practice questions
{
  //print all even numbers from 1 to 100
  for (let n = 1; n <= 100; n++) {
    if (n % 2 === 0) {
      console.log(n);
    }
  }
}
{
  //create a game where you start with any random number and ask the user to guess the number until they guess it right
  // let chances = 5;
  // while (true) {
  //   let input = prompt("guess a num");
  //   let randomval = Math.floor(Math.random() * 10);
  //   console.log(randomval);
  //   if (input == randomval) {
  //     alert("you guessed it right!");
  //     break;
  //   } else {
  //     if (input > randomval) {
  //       console.log("it was actually less");
  //     } else {
  //       console.log("it was actually more");
  //     }
  //     input = prompt("guess next number");
  //   }
  //   chances--;
  //   if (chances === 0) {
  //     alert("you lost chances are up");
  //     break;
  //   }
  // }

  let randomval = Math.floor(Math.random() * 10);
  let input = prompt("enter the number");

  let chances = 0;
  while (input != randomval) {
    if (chances == 0) {
      alert("you lost");
      break;
    }
    prompt("guess again! chances left : " + chances);
    chances--;
  }
  console.log("congrats");
}
