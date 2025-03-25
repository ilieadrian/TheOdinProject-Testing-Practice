const {capitalizeFirstLetter, reverseString} = require('./script');

test ('Capitalize first letter', () => {
    expect(capitalizeFirstLetter('john')).toBe('John');
});

test ('Reverse string', () => {
    expect(reverseString('john')).toBe('nhoj');
});