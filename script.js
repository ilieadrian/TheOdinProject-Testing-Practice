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
        String.fromCharCode(
        (
          (
            character.charCodeAt(0) -
            (character >= "a" ? 97 : 65) +
            (shift >= 0 ? shift : 26 - (-shift % 26))
          ) % 26
        ) + (character >= "a" ? 97 : 65)
      )
    );

module.exports = {
    capitalizeFirstLetter,
    reverseString,
    calculator,
    caesarCipher
};