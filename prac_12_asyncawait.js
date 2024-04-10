//async and await are two keywords in js
//their job is to make asynchronous programming in js easier

//async function always returns a promise (even if we dont write a return statement for promise it returns a promise)

//await pauses the execution of its surrounding async function until the promise is resolved
//await can only be used within an async function

async function hello() {
  console.log(
    "hello look underneath this result in console, we can see a promise returned along with this"
  );
}
hello(); //function calls are block scoped, can not call function present in one block from another

//async await are used to get the data from promises

{
  function api() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data received");
        resolve(200);
      }, 2000);
    });
  }

  //to call the above api
  async function getData() {
    await api(); //await only works to get data from functions that are returning a promise
    await api();
  }

  getData();
}

{
  //replacing promise chains and callback chains using async await
  function api(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data);
        resolve(data); //a promise is only successful when it is resolved
      }, 3000);
    });
  }

  async function getApiData() {
    await api(1);
    await api(2);
    await api(3);
  }

  getApiData();
}

//above we can see that for async await we put the calls in getApiData() method and we need to call the method to
//get the data from the api
//there is a way to get the data without a function call, called
//IIFE:immediately invoked function expression

//IIFEs are functions that are invoked as soon as they are defined we dont need to call them explicitly
/*
    (func) (); //function body is inside parenthesis and have another paranthesis afterwards to call it
*/
{
  //replacing promise chains and callback chains using async await
  function api(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data);
        resolve(data); //a promise is only successful when it is resolved
      }, 3000);
    });
  }

  (async function () {
    await api(111);
    await api(222);
    await api(333);
  })();
}
