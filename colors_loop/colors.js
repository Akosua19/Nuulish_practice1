let selectedColors = ["purple", " red", "green", "black", "white"];

for (let i = 0; i < selectedColors.length; i++) {
  let colorInput = prompt("enter your color : ");
  console.log("this is " + colorInput);
}

let chosenColors = ["purple", "red", "pink", "brown", "red"];

for (let i = 0; i < chosenColors.length; i++) {
  let x = prompt("Enter your color : ");
  console.log("this is " + x);
}

let userColor = [];
for (let x = 0; x < 3; x++) {
  let i = prompt("enter your color : ");
  userColor.push(i);
}

for (let index = 0; index < userColor.length; index++) {
  console.log("this is " + userColor[index]);
}
