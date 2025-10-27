// javaScript is wild wild west no rules but best practices.
//mdn and w3schools web docs is my go to reference for best practices and methods
//Task1 formatFullName
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
  const price = document.getElementById('price').value;

  const quantity = document.getElementById('qty').value;
  const taxRate = document.getElementById('taxRate').value;

  const result = calculateTotalCost(price, quantity, taxRate);

  document.getElementById('result2').textContent = result;
});