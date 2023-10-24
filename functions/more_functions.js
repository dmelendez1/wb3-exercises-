function displayMailingLabel(name, address, city, state, zip) {
  console.log(`${name}`);
  console.log(`${address}`);
  console.log(`${city}, ${state} ${zip}`);
}
const name1 = "Diana Melendez";
const address1 = "1217 E Portland st";
const city1 = "Phoenix";
const state1 = "Arizona";
const zip1 = "85006";

console.log("Mailing Label for Person 1:");
displayMailingLabel(name1, address1, city1, state1, zip1);

const name2 = "Farmer Mcdonald";
const address2 = "1234 E Dairy Lane";
const city2 = "Point Place";
const state2 = "Wisconsin";
const zip2 = "98765";

console.log("Mailing Label for Person 2:");
displayMailingLabel(name2, address2, city2, state2, zip2);

/*function addNumbers(num1, num2) {
  const result = num1 + num2;
  console.log(`${num1} + ${num2} = ${result}`);
}

const num1 = 5;
const num2 = 7;

addNumbers(num1, num2);

function displayReceipt(totalDue, amountPaid) {
  if (amountPaid >= totalDue) {
    const changeDue = amountPaid - totalDue;
    console.log(`Total Due: $${totalDue}`);
    console.log(`Amount Paid: $${amountPaid}`);
    console.log(`Change Due: $${changeDue}`);
  } else {
    const amountShort = totalDue - amountPaid;
    console.log(`Total Due: $${totalDue}`);
    console.log(`Amount Paid: $${amountPaid}`);
    console.log(`Amount Short: $${amountShort}`);
    console.log(`You are short, Please provide an additional $${amountShort}.`);
  }
}

const totalDue = 100;
const amountPaid = 20;
displayReceipt(totalDue, amountPaid);*/
