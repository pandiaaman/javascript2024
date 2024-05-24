//operators and conditionals

console.log("hello from prac2");

// --> arithmetic operators
// + - * /
{
  console.log(1 + 2);
  console.log(1 - 2);
  console.log(1 * 2);
  console.log(1 / 2);

  //modulo operator
  console.log(12 % 5);
  console.log(12 % 3);

  //exponent operator
  console.log(3 ** 2);
  console.log(2 ** 4);

  //increment and decrement operator
  let a = 5;
  console.log("a " + a);
  console.log(a++);
  console.log(a--);
  console.log(--a);
  console.log(++a);
}

//--> assignment operators
// = += -= *= /= %= **=
{
  let a = 4;
  console.log("a" + a); //4

  a += 1;
  console.log(a); //5

  a -= 1;
  console.log(a); //4

  a *= 4;
  console.log(a); //16

  a /= 2;
  console.log(a); //8

  a %= 3;
  console.log(a); //2

  a **= 2;
  console.log(a); //4
}

{
  console.log("********here********");
  console.log(1 + "1"); //11
  console.log("1" + 1); //11
  console.log("1" + 1 + "1"); //111
  console.log(1 + 1 + "1"); //21
  console.log("1" + 1 + 1); //111
  //above statements are calculated from left to right
  //if any one of the operand is a string the other one will be converted to a string(even if its a number)
  //Type Coercion: JavaScript automatically converts the number to a string when using the + operator if one of the operands is a string.
}
//--> comparison operators
// ==(equals to) ===(equals to and type) !=(not equals to) !==(not equals to and type)
// > >= < <=
{
  let a = 5;
  let b = 5;

  if (a == b) {
    console.log("a == b"); //true
  }

  if (a === b) {
    console.log("a === b"); //true because both are integers
  } else {
    console.log("a not equals to b in type");
  }

  let c = 5;
  let d = "5";

  if (c == d) {
    console.log("c ==d"); //true: js converts string to a number and compares it with a number
  }

  if (c === d) {
    console.log("c === d");
  } else {
    console.log("since types are different so not ===");
  }
}

//--> logical operators
// &&, ||, !
{
  console.log(true && true);
  console.log(true || true);
  console.log(true && false);
}

// if else
{
  let num = 10;
  if (num % 2 === 0) {
    console.log("num is even");
  } else {
    console.log("num is odd");
  }
}

//ternary operator
{
  let num = 10;
  num === 10 ? console.log("it is 10") : console.log("not 10");

  let age = 19;
  let result = age > 18 ? "adult" : "not adult";
  console.log(result);
}

//switch case
{
  let fruit = "orange";

  switch (fruit) {
    case "mango": {
      console.log("it is mango");
      break;
    }
    case "orange": {
      console.log("it is orange");
      break;
    }
    case "papaya":
    case "watermelon": {
      console.log("it is either papaya or watermelon");
      break;
    }
    default: {
      console.log("none of the frutis in the list");
      break;
    }
  }
}

//-->practice questions
{
  // let input = prompt("enter a number");
  // if (input % 5 === 0) {
  //   alert("multiple of 5");
  // } else {
  //   alert("not a multiple of 5");
  // }
}
