


let login = prompt('Who is there?')
if (login === 'Admin') {

let password = prompt('6191!')
if (password === 'TheMaster') {
    alert('Welcome')
}   else if (password === "" || password === null) {
    alert('Canceled')
} else { 
    alert('Wrong Password')
} 
} else if (login === "" || login == null) {
   alert('Canceled') 
} else {
    alert('I dont know you! ')
} 

//calling a value inside of an array object
// let names = [ 'Saviour', 'Daniel', 'GoodNess']
// alert(names[0])

// checking the length in and Array

// let names = [ 'Saviour', 'Daniel', 'GoodNess']
// alert(names.length)

//Javascript Method for removing value from and array object

// let names = [ 'Saviour', 'Daniel', 'GoodNess']
// names.pop()
// alert(names)

//Javascript Method for replacing a value in an array object

// let names = [ 'Saviour', 'Daniel', 'GoodNess']
// names.pop()
// names.push( 'Emmanuel')
// alert(names)

// let cart = [];
// while (cart.length <= 3) {
//     const item = prompt('add to cart');
//     cart.push(item);
//     alert('Added')
// }
// alert(cart)



