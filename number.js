console.log(isNaN(NaN));      // true (NaN is NaN)
console.log(isNaN(123));      // false (123 is a number)
console.log(isNaN('123'));    // false (string '123' is coerced to number 123)
console.log(isNaN('hello'));  // true (string 'hello' cannot be coerced to a number)
console.log(isNaN(undefined)); // true (undefined is not a number)
console.log(isNaN(true));     // false (true is coerced to 1, which is a number)
console.log(isNaN(null));     // false (null is coerced to 0, which is a number)
console.log(isNaN([]));       // false (empty array is coerced to 0, which is a number)
console.log(isNaN([1]));      // false (array with one number is coerced to 1, which is a number)
console.log(isNaN([1, 2]));  // true (array with more than one element cannot be coerced to a number)





let num = 5;
let str = '10';
console.log(num + str); 


let num1 = 5;
let str1 = '10';
console.log(num + Number(str)); 

let booleanVal = Boolean(1);  // true 
console.log(booleanVal);




function generateOTP(length) {
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10); 
    }
    return otp;
  }
  
  let otp = generateOTP(6); 
  console.log(`Your OTP is: ${otp}`);
  



