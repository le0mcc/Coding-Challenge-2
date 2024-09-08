// Bill Splitter Application

// Task 1: Calculate the tip with a ternary operator
let bill = 20
let tip = (bill >= 50 && bill <= 300) ? (bill * .15) : (bill * .2);

// Task 2: Display the bill, tip, and total bill in the console
let totalBill = bill + tip
console.log(`The bill was $${bill}, the tip was $${tip}, and the total bill was $${totalBill}.`)
