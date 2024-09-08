// Bill Splitter Application

// Task 1: Calculate the tip with a ternary operator
let bill = 20
let tip = (bill >= 50 && bill <= 300) ? (bill * .15) : (bill * .2);

// Task 2: Display the bill, tip, and total bill in the console
let totalBill = bill + tip
console.log(`The bill was $${bill}, the tip was $${tip}, and the total bill was $${totalBill}.`)

// Task 3: Create a function named calculateTip and test it
function calculateTip(testBill) {
    return (testBill >= 50 && testBill <= 300) ? (testBill * .15) : (testBill * .2); }
let testBill = 100;
let testTip = calculateTip(testBill);
let testTotal = testBill + testTip
console.log(`The bill was $${testBill}, the tip was $${testTip}, and the total was $${testTotal}.`)
