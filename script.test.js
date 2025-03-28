const {capitalizeFirstLetter, reverseString, calculator, caesarCipher} = require('./script');

test ('Capitalize first letter', () => {
    expect(capitalizeFirstLetter('john')).toBe('John');
});

test ('Reverse string', () => {
    expect(reverseString('john')).toBe('nhoj');
});

test ('Calculator addition', () => {
    expect(calculator.addition(2,3)).toBe(5);
});

test ('Calculator minus', () => {
    expect(calculator.minus(7,1)).toBe(6);
});

test ('Calculator multiply', () => {
    expect(calculator.multiply(3,6)).toBe(18);
});

test ('Calculator divide', () => {
    expect(calculator.divide(21,3)).toBe(7);
});

test ('Caesar cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});