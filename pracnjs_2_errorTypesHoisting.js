//Let and const are hoisted but different from var
// Let and const are in TEMPORAL DEAD ZONE
{
  try {
    console.log(a);
    let a = 5; //ReferenceError: Cannot access 'a' before initialization
  } catch (error) {
    console.log(error);
  }
  //FOR let and const declarations, we will notice that they are inside the script scope which is TEMPORAL DEAD ZONE
  ///here the memory is associated and values are defined as undefined in the beginning but the scipt defined variables need
  //to be initialized first
  //problem with above code is that we can not access let like we access var
  //but let is also hoisted
}

//TEMPORAL DEAD ZONE: time from the moment the let variable is hoisted to when it is initialized
//This sepearate space is the SCRIPT SCOPE
{
  //reference error vs syntax error vs type error
  //Reference error
  //if we try to access a variable that is present in the temporal dead zone then it is a reference error
  //as happening above

  //
  //type error
  //if we try to reassign a value to const
  try {
    const c = 30;
    c = 40;
  } catch (error) {
    console.log(error);
  }

  //
  //Syntax error
  //when there is an issue with the syntax, say we try to redeclare a let variable
  try {
    //below program will create issue during the execution context first phase which is memory assignment as let cant be assigned twice
    // let b = 10;
    // let b = 5;
  } catch (error) {
    console.log(error); //IMPORTANT: syntax error can not be handled by try catch
  }
}

//Shadowing: basic concept which means that JS consider the most local value of a variable
//if we have a same name variable inside a block and we print it, the latest decaration of that variable will shadow the older one
{
  var k = 50;
  {
    var k = 5;
    console.log(k); //print 5 even though earlier we had 50 in the global scope
  }
  //BUT what is weird is that now the var k = 5 has also overriden the value k
  console.log(k); //this will print 5 not 50
}
{
  //var is function scoped
  var kk = 10;
  function func() {
    var kk = 50;
  }
  console.log(kk);
}

{
  //shadowing with let
  let m = 20;
  {
    let m = 10;
    console.log(m); //will print 10
  }
  console.log(m); //in this case it will not override because both m values are present in different scopes
}

//ILLEGAL shadowing
{
  //we can not shadow let variable inside a block using a var '''' but we can shadow a let using a let or a var using a let
  let p = 20;
  {
    // var p = 10; //SyntaxError: Identifier 'p' has already been declared
    console.log(p);
  }
}
