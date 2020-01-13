// loops

var todos = [
  "clean roon",
  "brush teeth",
  "exercise",
  "learn javascript",
  "eat healthy"
];

for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
}

// var counterOne = 10;
// while (counterOne > 0) {
//   console.log(counterOne);
//   counterOne--;
// }

// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);

// for (var i = 0; i < todos.length; i++) {
//     console.log(i);
//   }

//  todos.forEach(function(todo, i){
//     console.log(todo, i);
//  })

// var logTodo = function(todo, i){
//     console.log(todo, i);
//  }

//  todos.forEach(logTodo);

var database = [
  {
    username: "vasya",
    password: "pass"
  },
  {
    username: "sally",
    password: "123"
  },
  {
    username: "ingrid",
    password: "777"
  }
];

var newsFeed = [
  { username: "Vasya", timeline: "djsfh fsdysdguyf gsdfygusfyd uyg" },
  { username: "Petya", timeline: "ioupiopiop  opoip iop" },
  { username: "Masha", timeline: "zxzxzczvcxvxcvzxc" }
];

var userNamePrompt = prompt("What's your username?");
var userNamePass = prompt("What's your password?");


function isUserValid(user, pass){
    var isFound = false;
    database.forEach(function(item, index) {
        if (user === item.username && pass === item.password) {
          console.log("foreach: matched user " + index);
          isFound = true;
        }
      });
      return isFound;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
      console.log(newsFeed);
    } else {
      alert("Sorry, wrong username or password.");
    }
}

function signInUser(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      console.log("for loop: matched user " + i);
    }
  }
  var found = false;
  var loopIndex = 0;
  while (loopIndex < database.length) {
    if (
      user === database[loopIndex].username &&
      pass === database[loopIndex].password
    ) {
      console.log("while looop: matched user " + loopIndex);
      found = true;
    }
    loopIndex++;
  }

  loopIndex = 0;
  do {
    if (
      user === database[loopIndex].username &&
      pass === database[loopIndex].password
    ) {
      console.log("do loop: matched user " + loopIndex);
      found = true;
    }
    loopIndex++;
  } while (loopIndex < database.length);

  database.forEach(function(item, index) {
    if (user === item.username && pass === item.password) {
      console.log("foreach: matched user " + index);
      found = true;
    }
  });
  if (!found) {
    alert("Sorry, wrong username or password.");
  }



  //   if (user === database[0].username && pass === database[0].password) {
  //     console.log(newsFeed);
  //   } else {
  //     alert("Sorry, wrong username or password.");
  //   }
}
signIn(userNamePrompt, userNamePass);
