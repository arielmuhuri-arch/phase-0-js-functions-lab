function calculateTax(amount)  {
     let taxRate =0.1;
    return amount * taxRate;
}
console.log(calculateTax(100));

function  convertToUpperCase(text){
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello world"));

function  findMaximum(num1, num2){
    if (num1 > num2) {
        return num1;
    }
    else if (num2 > num1){
        return num2;
    }
        else {
            return 0;
        }
    }

console.log(findMaximum(5, 10));

function  isPalindrome(world){
     let reverse= world.split('').reverse().join('');
     return world === reverse;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

function  calculateDiscountedPrice(originalPrice, discountPercentage){
    return originalPrice - (originalPrice * (discountPercentage / 100));
}
console.log(calculateDiscountedPrice(100, 20));




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };