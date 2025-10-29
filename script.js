// javaScript is wild wild west no rules but best practices.
//mdn and w3schools web docs is my go to reference for best practices and methods
//Task1 formatFullName
document.getElementById('btnName').addEventListener('click', () => {
  const f = document.getElementById('firstName').value;
  const l = document.getElementById('lastName').value;
  const result = formatFullName(f, l);
  document.getElementById('result1').textContent = result;
});
function formatFullName(firstName, lastName) {

    if (!firstName) {
        return "Invalid name input.";
    }

    if (!lastName) {
        return "Invalid name input.";
    }
// capitalize first letter not alphabet of each name
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(); //slice mdn
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase(); //slice mdn
    return lastName + ", " + firstName;
    // References: practiced from MDN Web Docs (practiced methods) practice makes perfect
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/charAt
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLowerCase
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toUpperCase
} 
// we can comment out the below console logs to see the output in the browser console individually

console.log(formatFullName("Trainor", "Tishana"));    // Tishana, Trainor my teacher at Per Scholas
console.log(formatFullName("Santos", "Bryan"));      // Bryan Santos my teacher at Per Scholas

console.log(formatFullName("dewan", "mahmud")); // Mahmud, Dewan student at Per Scholas
console.log(formatFullName("", "mahmud"));      // Invalid name input. because first name is missing
console.log(formatFullName("rocky"));           // Invalid name input. because last name is missing

//Task2 calculateTotalCost
// function to calculate total cost with tax
// price, quantity, taxRate as parameters
function calculateTotalCost(price, quantity, taxRate) {
    if (isNaN(price)) {
        return "Invalid input.";
    }
    if (isNaN(quantity)) {
        return "Invalid input.";
    }
    if (isNaN(taxRate)) {
        return "Invalid input.";
    }
// convert inputs to numbers 
    price = Number(price); //Number method mdn
    quantity = Number(quantity);
    taxRate = Number(taxRate);

    return (price * quantity) * (1 + taxRate); // formula to calculate total cost with tax
    // References: practiced from MDN Web Docs (practiced methods) practice makes perfect
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
}

document.getElementById('btnCost').addEventListener('click', () => {
  const price = document.getElementById('price').value; // get price input value
  const quantity = document.getElementById('qty').value; // get quantity input value
  const taxRate = document.getElementById('taxRate').value; // get tax rate input value
  const result = calculateTotalCost(price, quantity, taxRate); // call calculateTotalCost function
  document.getElementById('result2').textContent = result; // display result in result2 paragraph
});
// task 3 checkEligibility
// function to check eligibility based on age and employment status
// referances: nested if statements from w3schools
// https://www.w3schools.com/js/js_if_else.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// age and isEmployed as parameters 

function checkEligibility(age, isEmployed) {

    age = Number(age);

    if (age > 18) {

        if (isEmployed === true) {
            return "Eligible.";
        }

        if (isEmployed === false) {
            return "Conditionally eligible.";
        }

    }

    return "Not eligible.";
}
// event listener button click
   document.getElementById('btnElig').addEventListener('click', () => {
    const age = document.getElementById('age').value;
   
    const employedText = document.getElementById('job').value.toLowerCase();
   
    const isEmployed = employedText === "true";

    const result = checkEligibility(age, isEmployed);
    document.getElementById('result3').textContent = result;
});
// we can comment out the below console logs to see the output in the browser console individually
console.log(checkEligibility(25, true));  // Eligible.
 console.log(checkEligibility(25, false)); // Conditionally eligible.
console.log(checkEligibility(18, true));  // Not eligible.

//task4 
document.getElementById('btnDiscount').addEventListener('click', () => {
    const price = document.getElementById('price2').value;
    const quantity = document.getElementById('qty2').value;
    const taxRate = document.getElementById('tax2').value;
    const discount = document.getElementById('discount').value;

    const result = calculateTotalCostWithDiscount(price, quantity, taxRate, discount);
    document.getElementById('result4').textContent = result;
});
function calculateTotalCostWithDiscount(price, quantity, taxRate, discount = 0) {

    if (isNaN(price)) {
        return "Invalid input.";
    }

    if (isNaN(quantity)) {
        return "Invalid input.";
    }

    if (isNaN(taxRate)) {
        return "Invalid input.";
    }

    if (isNaN(discount)) {
        return "Invalid input.";
    }
 //Number method mdn references https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
    price = Number(price);
    quantity = Number(quantity);
    taxRate = Number(taxRate);
    discount = Number(discount);

    let total = (price * quantity) - discount;

    if (total < 0) {
        total = 0;
    }

    return total * (1 + taxRate);
}

// mdn references https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// mdn references https://developer.mozilla.org/en-US/docs/Web/API/Element/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

