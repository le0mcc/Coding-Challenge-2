// Bill Splitter Application Leo McClellan

// Task 1: Calculate the tip with a ternary operator
let billTaskOne = 20;
let tip = (billTaskOne >= 50 && billTaskOne <= 300) ? (billTaskOne * .15) : (billTaskOne * .2);

// Task 2: Display the bill, tip, and total bill in the console
let totalBillTaskOne = billTaskOne + tip;
console.log(`The bill was $${billTaskOne}, the tip was $${tip}, and the total bill was $${totalBillTaskOne}.`);

// Task 3: Create a function named calculateTip and test it
function calculateTip(testBill) {
    return (testBill >= 50 && testBill <= 300) ? (testBill * .15) : (testBill * .2) }
let testBill = 100;
let testTip = calculateTip(testBill);
let testTotal = testBill + testTip;
console.log(`The bill was $${testBill}, the tip was $${testTip}, and the total was $${testTotal}.`);

// Task 4: Utilize arrays to show sets of data for bills and tips 
// Task 5: Test this data set in browser
// First set of given data
let bills = [275, 40, 430];
let tips = bills.map(bill => calculateTip(bill));
let totals = bills.map((bill,index) => bill + tips[index]);
console.log(`The totals for the first dataset are $${totals}.`);

// Second set of given data
let billsTwo = [125,555,44];
let tipsTwo = billsTwo.map(bill => calculateTip(bill));
let totalsTwo = billsTwo.map((bill,index) => bill + tipsTwo[index]);
console.log(`The totals for the second dataset are $${totalsTwo}.`);
