// DOM VARIABLES
var randomNumberButton = document.getElementById("generate");
var recentNumbersDiv = document.getElementById("recent-numbers");

// JAVASCRIPT VARIABLES
var randomNumberArray = [];

// FUNCTION DEFINITIONS

function init() {
  var arrayFromStorage = JSON.parse(localStorage.getItem("randomNumberArray"));
  if (arrayFromStorage === null) {
    return;
  } else {
    randomNumberArray = arrayFromStorage;
  }
  recentNumbersDiv.innerHTML = "";
  for (var i = 0; i < randomNumberArray.length; i++) {
    var h1El = document.createElement("h1");
    // 2. Add content.
    h1El.textContent = randomNumberArray[i];
    // 3. Append to an existing element.
    recentNumbersDiv.append(h1El);
  }
}

// EVENT LISTENERS
randomNumberButton.addEventListener("click", function () {
  //   alert("You clicked the random number button!");
  // Generate a random  number
  var randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  randomNumberArray.push(randomNumber);
  // Display it on the page somewhere.
  // DOM Manipulation
  // 1. Create an element.
  var h1El = document.createElement("h1");
  // 2. Add content.
  h1El.textContent = randomNumber;
  // 3. Append to an existing element.
  recentNumbersDiv.append(h1El);

  localStorage.setItem("randomNumberArray", JSON.stringify(randomNumberArray));
});

// FUNCTION CALLS

init();
