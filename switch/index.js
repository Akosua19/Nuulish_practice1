//
//let mySon = "Akosua";

//switch (mySon) {
//  case "Amina":
//    document.write("this isnt right")
//  break
//case "Kwabena":
//  document.write('right')
//break
//case "Akosua":
//  document.write('try again')
///break
//}

// for a program that lets a user input a number

let myFirstNum;
let myNum;

while (isNaN(myNum)) {
  myFirstNum = prompt("Enter a number : ");
  myNum = parseFloat(myFirstNum);
}

console.log(myNum);

switch (true) {
  case myNum > 100:
    alert("this is greater than 100");
    break;

  case myNum < 100:
    alert("this is lesser than 100");
    break;

  case myNum === 100:
    alert("this is exactly 100");
    break;

  default:
    alert("no conditions met");
    break;
}
