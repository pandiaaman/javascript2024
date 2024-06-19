{
  //async function returns a promise

  async function getData() {
    console.log("hello");
  }

  let f1 = getData();
  console.log(f1);
}
{
  // let pr1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("promise response");
  //     reject("promise rejected");
  //   }, 5000);
  // });
  // async function getData() {
  //   return pr1;
  // }
  // let promiseRes = getData();
  // promiseRes.then((res) => {
  //   console.log(res);
  // });
  // console.log(promiseRes);
}

{
  //using async and await
  let pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise response");
      reject("promise rejected");
    }, 5000);
  });

  async function getData() {
    let res = await pr1;
    console.log(res);
  }

  getData();
}

{
  const GITHUB_API = "https://api.github.com/users/pandiaaman";

  async function gitApi() {
    let result = await fetch(GITHUB_API);
    console.log(result);
    let data = await result.json();
    console.log(data);
  }

  gitApi();
}

//https://www.youtube.com/watch?v=6nv3qy3oNkc&list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID&index=25
