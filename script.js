function formatFullName(firstName, lastName) {

    if (!firstName) {
        return "Please enter a valid first name.";
    }

    if (!lastName) {
        return "Please enter a valid last name.";
    }

    // capitalize first letter not alphabet of each name
    // References: practiced from MDN Web Docs (practiced methods) practice makes perfect
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/charAt
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLowerCase
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toUpperCase
    
    firstName = firstName.charAt(0).toUpperCase() + 
    firstName.slice(1).toLowerCase();
    
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return lastName + ", " + firstName;
}
