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

module.exports = {
    capitalizeFirstLetter,
    reverseString,
    calculator
};