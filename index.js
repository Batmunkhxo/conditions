// Exercise 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
 const giveNumber = prompt("Enter a number:");
 if (typeof giveNumber !== "number")
    console.log("Nan - Not a Number! Please Input Number")
 if (giveNumber %3 == 0 || giveNumber % 5 == 0) {
    console.log("Buzz and Fizz"); } 
 if (giveNumber % 3 == 0){
    console.log("Fizz");
 } else if (giveNumber % 5 == 0) {
    console.log("Buzz");
 }    
 if (giveNumber % 3 != 0 || giveNumber % 5 != 0) {
    console.log("Not Buzz and Fizz");
 }
 else {
    console.log("given Input Number/Value")
 }
// Exercise 2
 
// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs
 
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
const number1 = -5
const number2 = -2
const number3 = -6
const number4 =  0
const number5 = -1


if(number1>number2 && number1>number3 && number1>number4 && number1>number5)
{console.log(number1)}
else if(number2>number1 && number2>number3 && number2>number4 && number2>number5)
{console.log(number2)}
else if(number3>number1 && number3>number2 && number3>number4 && number3>number5)
{console.log(number3)}
else if(number4>number1 && number4>number2 && number4>number3 && number4>number5)
{console.log(number4)}
else if(number5>number1 && number5>number2 && number5>number3 && number5>number4)
{console.log(number5)}
else{
    console.log(0)
}
// Exercise 3
 
// Write a JavaScript program that accept two integers and display the larger.
 
// check input numbers are the type of number, if not console.log('Invalid inputs)
 
// Sample numbers : 2,5
// Output : 5
 const largestNumber1 = 2.5 ;
 const largestNumber2 = 5 ;
 if (largestNumber1>largestNumber2){
    console.log(largestNumber1)
 }
 else(
    console.log(largestNumber2)
 )

// Exercise 4
 
// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.
 
// Sample numbers : 3, -7, 2
// Output : The sign is -
 const one = 3;
 const two = -7;
 const three = 2;
 if (one+two+three>0){
    console.log("positive");
 } else {
    console.log("Negative")
 }
// Exercise 5
 
// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.
const x = 6
const y = 9

if (x>y){
    console.log("True")}
else if (x===y){
    console.log("False")}
else{
console.log("Not sure")}

 
// Exercise 6
 
// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.
const grade = 70
if (60>grade){
    console.log("F");
}
else if (60<=grade && 69>=grade){
console.log("D");
}
else if (70<=grade && 79>=grade){
    console.log("C");
}
else if (80<=grade && 89>=grade){
    console.log("B");
}
else{
    console.log("A");
}
// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character
const text = "Travis";
if (10<text.length){
console.log("More than 10")
}
// Exercise 7 j
 
//  3) Write conditional expressions to satisfy the following safety rules:
 
//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
 
//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
 
//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
 
// Write If statement that takes number checks if the number is odd or even
 
//     if odd return "the number is odd"
//     if even return "the number is even"
 
// Exercise 8 j
 
// Write if statement that takes role and return each role with greeting
 
//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi'
 
// Exercise 8 j
 
// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
 