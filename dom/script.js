// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
// 	console.log("CLICK!!!");
// })

var ul = document.querySelector("ul");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");

function inputLength() {
  return input.value.length;
}

function addElementToList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    addElementToList();
  }
}

function addListAfterKeypress(e) {
  if (e.keyCode === 13 && inputLength() > 0) {
    addElementToList();
  }
}

input.addEventListener("keypress", addListAfterKeypress);
button.addEventListener("click", addListAfterClick);
