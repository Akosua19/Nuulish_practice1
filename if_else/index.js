

let myFirstNum;
let myNum;

while (isNaN(myNum)) {
  myFirstNum = prompt("Enter a number : ");
  myNum = parseFloat(myFirstNum);
}

if (isNaN(myNum)) {
  prompt("Enter a number, not a string.");
} else {
  if (myNum > 100) {
    alert("this is greater than 100");
  } else if (myNum < 100) {
    alert("this is lesser than 100");
  } else alert("this is exactly 100");
}
