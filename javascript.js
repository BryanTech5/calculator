// let num1 = Number (prompt("Enter First number"));
// let num2 = Number (prompt("Enter second number"));
// let sign = prompt ("Sign...");

// sign == "+" ? alert(num1 + num2) : alert("syntax error")

//  if (sign == "+"){
//   alert(num1 + num2);
//  } else if(sign == "-"){
//   alert(num1 - num2);
//  } else if(sign == "*"){
//   alert(num1 * num2);
//  } else if(sign == "/"){
//   alert(num1 / num2);
//  } else if(sign == "**"){
//   alert(num1 ** num2);
//  } else {
//   alert("SyntaxError")
//  }

// let quetion = prompt('What is the official javascript name?');
// if (quetion == 'ECMAscript'){
//   alert('Right!')
// } else {
//   alert('You dont know ECMAscript!')
// }
 
// let nums = Number(prompt('Enter digits:'))
// if (nums > 0) {
//   alert('1')
// } else if( nums < 0 ){
//   alert('-1')
// } else {
//   alert('0')
// }
  

// let numb = Number(pro)
  
// let age = prompt('Enter age')

// if (age < 18 || age > 40) {
//   alert('Not allowed')
// } else {
//   alert('Allowed')
// }

//  let login = prompt('Who is there?')
//  if (login === 'Admin') {
 
//   let password = prompt('Enter Password!') 
//   if (password === 'TheMaster')
//     alert('Welcome') 
//  } 
 
//  let user = [
//   {
//     username: 'Saviour',
    
//     email:'saviour@gmail.com',

//     phonenumber: '1234567890',

//     password: 123456,
    
//     login: ()=>{
//       alert('login')
//     }

//   }
//  ]
//  user[0].login()


//  const user = {
//      userName: '',
//      email: '',
//      password: ''
//  }

//  const username = prompt ('Enter full name')
//  const email = prompt ('email')
//  const password = prompt ('password')
 
//  user.userName = username
//  user.email = email
//  user.password = password

//  console.log(user)

// const item = [ 'shoe','milo', 'sugar', 'chair', 'table', 'pillow']

// let i = 0
// while(i < item.length) {
//   console.log(`${item[i]}`)
//i++
// }
/*const item = [ 'pen', 'book', 'bag']

let a = 0

  
  for (let a = 0; a < item.length ; a++) {
  console.log(item)

}
  */

// if (browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }


// const firstName = prompt('EnterFirst Name')

// const lastName = prompt('EnterLast Name')

// const getFullName = () => {
  
// alert(`${firstName} ${lastName}`) 

// }
// getFullName()





    
// let i = 0;    
// let sum = 0;
// while (i <= 5) { 
//     sum += i;
//     i++;
//     console.log(sum);  
// }
// alert(i + sum)
// const calculator = document.getElementById("btn")
// console.log(document)

// let displayValue = ""
// let sign = ""
// let firstNumber = ""
// let displayscreen = document.querySelector("input")

// function apend(num) {
//   displayValue += num
//   displayscreen.value = num
//   firstNumber =+ num
//   console.log(firstNumber);
  
// }

// function operator(val) {
//   sign = val
//   displayscreen.value = val
// }

// function equal(val) {
//   let total = firstNumber + 1
//   displayscreen.value = total
//   console.log(total);
  
// }


let displayValue = "";
let sign = "";
let firstNumber = "";
let displayscreen = document.querySelector("input");

function append(num) {
  displayValue += num;
  displayscreen.value = displayValue;
  firstNumber += num;
  console.log(firstNumber);
}

function operator(val) {
  sign = val;
  displayscreen.value = val;
}

function equal() {
  let total;
  let secondNumber = parseFloat(displayValue.replace(firstNumber, ""));
  
  switch (sign) {
    case '+':
      total = parseFloat(firstNumber) + secondNumber;
      break;
    case '-':
      total = parseFloat(firstNumber) - secondNumber;
      break;
    case '*':
      total = parseFloat(firstNumber) * secondNumber;
      break;
    case '/':
      total = parseFloat(firstNumber) / secondNumber;
      break;
    default:
      total = "Error";
      break;
  }

  displayscreen.value = total;
  console.log(total);
}



// let displayValue = "";
// let sign = "";
// let firstNumber = "";
// let displayscreen = document.querySelector("input");

// function append(num) {
//   displayValue += num;
//   displayscreen.value = displayValue;
//   firstNumber += num;
//   console.log(firstNumber);
// }

// function operator(val) {
//   sign = val;
//   displayscreen.value = val;
// }

// function equal() {
//   let total;
//   let secondNumber = parseFloat(displayValue.replace(firstNumber, ""));
  
//   if (sign === '+') {
//     total = parseFloat(firstNumber) + secondNumber;
//   } else if (sign === '-') {
//     total = parseFloat(firstNumber) - secondNumber;
//   } else if (sign === '*') {
//     total = parseFloat(firstNumber) * secondNumber;
//   } else if (sign === '/') {
//     total = parseFloat(firstNumber) / secondNumber;
//   } else {
//     total = "Error";
//   }

//   displayscreen.value = total;
//   console.log(total);
// }
  
