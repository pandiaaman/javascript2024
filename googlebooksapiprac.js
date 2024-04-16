console.log("this is to see the result coming from the google books api");

{
  const bookinput = document.getElementById("bookinput");
  const getdata = document.getElementById("getgooglebookdata");
  const resultdiv = document.getElementById("result");

  const getGoogleApiData = async () => {
    console.log("getting data...");
    const Mainurl = "https://www.googleapis.com/books/v1/volumes?q=";

    let userinput = String(bookinput.value).trim().replaceAll(" ", "+");
    console.log(userinput);
    let url = Mainurl.concat(userinput);
    console.log(url);
    let response = await fetch(url); //awaiting the response of fetch so that once we receive only then we convert it json
    console.log(`response status :: ${response.status}`);
    console.log(response);
    //AJAX : asynchronous js and xml
    //AJAJ : asynchronous js and json
    //these days, data is transferred in form of JSON (NOT IN XML generally)
    //JSON format: JS object notation: is a java script object
    let data = await response.json(); //converting the data to json and waiting before we print the data
    console.log(data);

    let apires = document.createElement("p");
    apires.textContent = data.totalItems;
    resultdiv.appendChild(apires);

    for (let item of data.items) {
      console.log(item.text);
      //below code is just to print the data to ui
      let apires = document.createElement("p");
      apires.textContent = item.id + " " + item.volumeInfo.title;
      resultdiv.appendChild(apires);
    }
  };

  getdata.addEventListener("click", () => {
    console.log("button is clicked");
    resultdiv.textContent = "";
    getGoogleApiData();
  });
}

{
  const bookinputchange = document.getElementById("bookinputchange");
  const getdatachange = document.getElementById("getgooglebookdataonchange");
  const resultchangediv = document.getElementById("resultonchange");

  const getGoogleApiData = async () => {
    console.log("getting data...");
    const Mainurl = "https://www.googleapis.com/books/v1/volumes?q=";

    let userinput = String(bookinputchange.value).trim().replaceAll(" ", "+");
    console.log(userinput);
    let url = Mainurl.concat(userinput);
    console.log(url);
    let response = await fetch(url); //awaiting the response of fetch so that once we receive only then we convert it json
    console.log(`response status :: ${response.status}`);
    console.log(response);
    //AJAX : asynchronous js and xml
    //AJAJ : asynchronous js and json
    //these days, data is transferred in form of JSON (NOT IN XML generally)
    //JSON format: JS object notation: is a java script object
    let data = await response.json(); //converting the data to json and waiting before we print the data
    console.log(data);

    let apires = document.createElement("p");
    apires.textContent = data.totalItems;
    resultchangediv.appendChild(apires);

    for (let item of data.items) {
      console.log(item.text);
      //below code is just to print the data to ui
      let apires = document.createElement("p");
      apires.textContent = item.id + " " + item.volumeInfo.title;
      resultchangediv.appendChild(apires);
    }
  };

  //button
  bookinputchange.addEventListener("change", (ev) => {
    console.log(`something is typed ::  ${ev}`);
    resultchangediv.textContent = "";
    getGoogleApiData();
  });
}
