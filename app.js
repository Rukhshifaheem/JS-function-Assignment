// Exercise 6.1/Q1
function add(a, b) {
    console.log(a + b)
    return a + b
}
add(5, 2)
// Exercise 6.1/Q2
let num1 = 5
let num2 = 10
// Exercise 6.1/Q3
let result = add(num1, num2)
console.log("The result of adding", num1, "and", num2, "is:", result);
// Exercise 6.1/Q4
add(20, 30);
// Exercise 6.2/Q1,Q2,Q3,Q4,Q5
let descriptiveWords = ["vibrant", "elegant", "majestic", "dynamic", "charming", "brilliant", "graceful"];
function input() {
    let yourName = prompt("Enter your name")
    let randomValue = Math.floor(Math.random()*descriptiveWords.length)
    console.log("Hello " + yourName + "! You are " + descriptiveWords[randomValue] + ".");
}
input()
// Exercise 6.3/Q1,Q2,Q3,Q4,Q5
let number1 = prompt("Enter a number")
let number2 = prompt("Enter another number")
let operator = prompt("Enter am operator +, -, *, /")
function cal() {
    switch (operator) {
        case "+":
            console.log(number1 + number2);
            break;
        case "-":
            console.log(number1 - number2);
            break;    
        case "*":
            console.log(number1 * number2);
            break;  
        case "/":
            console.log(number1 / number2);
            break;    
    }
}
cal();
