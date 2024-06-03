{
  //promises

  function getApiData() {
    return new Promise((resolve, reject) => {
      //calling some api data
      let randomVal = Math.floor(Math.random() * 10);
      setTimeout(() => {
        resolve("success: " + randomVal);
        reject("failed");
      }, 3000);
    });
  }

  //fetching a promise
  getApiData()
    .then((result) => {
      console.log(result);
    })
    .then(() => {
      console.log("yayyy");
    })
    .catch((error) => {
      console.error(error);
    });

  //promise chaining
  getApiData()
    .then((result) => {
      console.log(result);
      getApiData()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
}
//promise chaining
// createOrder(cart)
//   .then((orderId) => {
//     return paymentPage(orderId); //returning is important
//   })
//   .then((paymentSuccess) => orderSummary(paymentSuccess))
//   .then((totalAmount) => updateWallet(totalAmount))
//   .catch((error) => {
//     console.log(error);
//   });

{
  //using fetch
  const GITHUB_API = "https://api.github.com/users/pandiaaman";

  const userPromise = fetch(GITHUB_API);

  console.log(userPromise); //promises have three states: pending, rejected, fulfilled

  userPromise
    .then((response) => {
      console.log("promise fulfilled");
      console.log(userPromise);
      response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

//Promise API
/*
  4 important promise api
    Promise.all()
    Promise.allSettled()
    Promise.race()
    Promise.any()
*/

{
  //Promise.all(iterable) : used to make parallel API calls; the iterable input can be an array of promises that need to be called
  //Promise.all([p1, p2, p3]); //makes 3 promise calls together
  //time taken : 3    1   2   //overall it will take 3 secs as it will wait for all promise calls to finish
  //lets say all promise calls are success, the output will be an array containing results of all promises
  //IMPORTANT: if any one of the promise calls FAIL then overall Promise.all() will also FAIL : output will be error
  //
  //Promise.allSettled(iterable) : provides output for all the successful api calls even if a few fail
  //
  //Promise.race(iterable) : its actually like a race, as soon as first promise is resolved, we receive the output of first settled promise
  //only one output is sent out, which is the output of the promise that is settled first, if its rejected, then it gives an error
  //
  //Promise.any(iterable) : similar to race, but it waits for the first successful promise (resolved)
  //if the first promise is rejected, Promise.any will continue to work and will get the first resolved promise
  //if all the promises fail, we get aggregated error: array of all the errors for all promises
}

{
  //Promise.all
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("promise 1 resolved"); //uncomment the resolve to see all the 3 successful promise calls result in Promise.all
      reject("p1 failed");
    }, 3000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 2 resolved");
    }, 1000);
  });

  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 3 resolved");
    }, 5000);
  });

  //Promise.all example
  //
  // Promise.all([p1, p2, p3])
  //   .then((res) => {
  //     console.log(`result Promise.all : ${res}`);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  //Promise.allSeettled example
  //
  Promise.allSettled([p1, p2, p3])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
