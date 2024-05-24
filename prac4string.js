//string injavascript
{
  let str = "hello aman";
  console.log(str.length);

  console.log(str[3]);
}

//template literals
{
  let str = `hello there`;

  let price = 10;

  let str1 = `the price is ${price}`;
  console.log(str1);

  console.log(`the price is also ${price}`);

  const someobj = {
    name: "aman",
    age: 26,
    type: "human",
    kind: true,
  };

  console.log(
    `the ${someobj.type} called ${someobj.name} is ${someobj.age} years old and`,
    someobj.kind ? "is kind" : "is not kind"
  );
}

//string methods
{
  let str = ` hello there`;
  console.log(str.toUpperCase());
  console.log(str.trim());
  //Strings are immultable in java script that is we can not change the defined strings
  console.log(str.slice(2));
  console.log(str.slice(3, 6));

  let str1 = str.concat(" aman");
  console.log(str1);

  //replace
  console.log(str1.replace("aman", "anisha"));

  //charat
  console.log(str1.charAt(2));
}

//practice questions
{
  // prompt user to enter their full name and generate a username for them based on the input. username should
  //start with @ followed by their name and ending with length of fullname
  let fullname = prompt(`enter full name`);
  let username = `@`
    .concat(fullname.trim().replace(/\s/g, "").toLowerCase())
    .concat(fullname.length);
  console.log(username);
}

//regular expressions
{
  let str = `hello how are you`;
  // let pattern = /\s/;
  let pattern = new RegExp(/\s/); //we can define the regexp as following as well (along with the pattern //)
  console.log("%");
  console.log(pattern.test(str));
  console.log(str.search(pattern)); //Given both ways are important in order to work with regex
}

{
  let str = `aman`;
  let pattern = /[0-9]{1}[a-z]*/;
  console.log(pattern.test(str));
}

{
  let str = `pandiaaman16@gmail.com`;
  let pattern = /\w+\d*@[a-z]+[.]{1}com/;
  console.log(pattern.test(str));
}
{
  let str = `pandia`;
  let pattern = /[0-9]*/; //0 or more times
  console.log(pattern.test(str));
}

{
  let str = `pandia`;
  let pattern = /[0-9]+/; //1 or more times
  console.log(pattern.test(str));
}
