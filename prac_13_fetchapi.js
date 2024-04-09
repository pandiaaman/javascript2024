//API (application programming interface)
//uses the request response cycle
//fetch method is used to fetch a resource(data)

//fetch returns a promise
//fetching from cat-facts
//base url: https://cat-fact.herokuapp.com
{
  fetch("https://cat-fact.herokuapp.com/facts")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

let catfactdiv = document.createElement("div");
document.body.appendChild(catfactdiv);
//better way of writing fetch code
{
  let URL = "https://cat-fact.herokuapp.com/facts";

  const getCatFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL); //awaiting the response of fetch so that once we receive only then we convert it json
    console.log(`response status :: ${response.status}`);
    console.log(response);
    //AJAX : asynchronous js and xml
    //AJAJ : asynchronous js and json
    //these days, data is transferred in form of JSON (NOT IN XML generally)
    //JSON format: JS object notation: is a java script object
    let data = await response.json(); //converting the data to json and waiting before we print the data
    console.log(data);

    for (let item of data) {
      console.log(item.text);
      //below code is just to print the data to ui
      let catfactpara = document.createElement("p");
      catfactpara.textContent = item.text;
      catfactdiv.appendChild(catfactpara);
    }
  };

  getCatFacts();
}

{
  //doing the same thing using promise chaining
  let URL = "https://cat-fact.herokuapp.com/facts";

  function getFacts() {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("from promise chaining");
        console.log(data);
      });
  }

  let btnPromise = document.createElement("button");
  btnPromise.textContent = "get data from api using promise chaining";
  btnPromise.addEventListener("click", () => {
    getFacts();
  });
  document.body.appendChild(btnPromise);
}

//we give options in the fetch api to show what type of request we are sending
/*
  fetch(URL, [OPTIONS])
*/
{
  let URL = "https://cat-fact.herokuapp.com/facts/data";

  let data = {
    name: "sushi",
    age: 3,
    type: "calico",
    text: "she is my love",
  };

  //configuring options
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify content type as JSON
    },
    body: JSON.stringify(data), //converting data to JSON format
  };
  fetch(URL, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      // Handle error response
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("There was a problem with the fetch operation:", err);
    });
}
