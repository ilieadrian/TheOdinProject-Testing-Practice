function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    return string.split("").reverse().join("");
}

const calculator = {
    addition(a,b){
        return a+b;
    },
    minus(a,b){
        return a-b;
    },
    multiply(a,b){
        return a*b;
    },
    divide(a,b){
        return a / b;
    }
}

const caesarCipher = (string, shift) =>
    // Replace every letter in the string
    string.replace(/[a-z]/gi, (character) =>
      // Convert calculated ASCII code to a string character
      String.fromCharCode(
        (
          (
            // Get the ASCII code of the letter
            character.charCodeAt(0) -
            // Normalize the ASCII value to start from 0 (for 'a' (97) or 'A' (65))
            (character >= "a" ? 97 : 65) +
            // Apply the shift, accounting for negative shifts by wrapping them within a 0-25 range
            (shift >= 0 ? shift : 26 - (-shift % 26))
            // Ensure the result wraps around the alphabet (0-25 range)
          ) % 26
        // Convert the normalized result back to its original ASCII range (for lowercase or uppercase)
        ) + (character >= "a" ? 97 : 65)
      )
    );

module.exports = {
    capitalizeFirstLetter,
    reverseString,
    calculator,
    caesarCipher
};