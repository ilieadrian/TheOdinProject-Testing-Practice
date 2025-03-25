const capitalizeFirstLetter = require('./script');

test ('capitalize first letter', () => {
    expect(capitalizeFirstLetter('john')).toBe('John');
});