console.log("rock paper scissors");

{
  let divElem = document.createElement("div");
  divElem.setAttribute("class", "rpsClass");
  divElem.setAttribute("id", "rpsId");
  divElem.innerText = "RPS";
  divElem.style.width = "100%";
  divElem.style.backgroundColor = "cyan";
  divElem.style.textAlign = "center";
  divElem.style.height = "100vh";
  document.body.append(divElem);

  let rockBox = document.createElement("button");
  rockBox.innerText = "ROCK";
  rockBox.style.padding = "10px";
  divElem.append(rockBox);

  let paperBox = document.createElement("button");
  paperBox.innerText = "PAPER";
  paperBox.style.padding = "10px";
  divElem.append(paperBox);

  let scBox = document.createElement("button");
  scBox.innerText = "SCISSORS";
  scBox.style.padding = "10px";
  divElem.append(scBox);

  let result = document.createElement("h2");
  result.innerText = "Select one";
  divElem.append(result);

  let userScore = 0;
  let compScore = 0;

  let userScoreh3 = document.createElement("h3");
  userScoreh3.innerHTML = userScore;
  let compScoreh3 = document.createElement("h3");
  compScoreh3.innerHTML = compScore;

  divElem.append(userScoreh3);
  divElem.append(compScoreh3);

  rockBox.addEventListener("click", () => {
    console.log("you clicked rock");
    let randomval = selectRandom();
    if (randomval === 0) {
      result.innerText = "ITS A DRAW";
    } else if (randomval === 1) {
      result.innerText = "ROCK LOST TO A PAPER";
      compScore++;
      compScoreh3.innerHTML = compScore;
    } else if (randomval === 2) {
      result.innerText = "ROCK WON AGAINST A SCISSORS";
      userScore++;
      userScoreh3.innerHTML = userScore;
    }
  });

  paperBox.addEventListener("click", () => {
    console.log("you clicked paper");
    let randomval = selectRandom();
    if (randomval === 0) {
      result.innerText = "PAPER WON AGAINST ROCK";
      userScore++;
      userScoreh3.innerHTML = userScore;
    } else if (randomval === 1) {
      result.innerText = "ITS A DRAW";
    } else if (randomval === 2) {
      result.innerText = "PAPER LOST AGAINST A SCISSORS";
      compScore++;
      compScoreh3.innerHTML = compScore;
    }
  });

  scBox.addEventListener("click", () => {
    console.log("you clicked scissors");
    let randomval = selectRandom();
    if (randomval === 0) {
      result.innerText = "SCISSORS LOST AGAINST A ROCK";
      compScore++;
      compScoreh3.innerHTML = compScore;
    } else if (randomval === 1) {
      result.innerText = "SCISSORS WON AGAINST PAPER";
      userScore++;
      userScoreh3.innerHTML = userScore;
    } else if (randomval === 2) {
      result.innerText = "ITS A DRAW";
    }
  });

  const selectRandom = () => {
    let value = Math.floor(Math.random(3) * 10) % 3;
    console.log(value);
    return value;
  };
}
