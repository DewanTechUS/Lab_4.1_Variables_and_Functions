function formatFullName(firstName, lastName) {

    if (!firstName) {
        return "Invalid name input.";
    }

    if (!lastName) {
        return "Invalid name input.";
    }

// capitalize first letter not alphabet of each name
   
firstName = firstName.charAt(0).toUpperCase() + 
    
    firstName.slice(1).toLowerCase();
    
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase(); //slice method to get rest of the string after first character

    return lastName + ", " + firstName;
  
    // References: practiced from MDN Web Docs (practiced methods) practice makes perfect
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/charAt
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLowerCase
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toUpperCase
}
