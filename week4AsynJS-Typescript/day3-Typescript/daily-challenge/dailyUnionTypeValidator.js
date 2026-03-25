"use strict";
// Daily Challenge: Union Type Validator
// 👩‍🏫 👩🏿‍🏫 What You’ll learn today
// How to create a function using union types to validate variable types.
// How to compare the type of a value against a list of allowed types.
// How to use loops in TypeScript to iterate through an array of allowed types.
// How to use TypeScript’s typeof operator for type checking.
// Description
// Create a function called validateUnionType that accepts a value and an array of allowed types (as strings). The function should check if the value is of one of the allowed types and return true if it is; otherwise, it should return false. Use this function to validate the type of variables in a program.
// Exercise
// Create a function called validateUnionType(value: any, allowedTypes: string[]): boolean that takes a value and an array of allowed types (as strings). The function should return true if the value is one of the allowed types; otherwise, it should return false. Demonstrate its usage by validating variables with different types.
function validateUnionType(value, allowedTypes) {
    // 1. 拿到 value 的类型
    let a = typeof value;
    // 2. 遍历 allowedTypes 数组
    for (let i = 0; i <= allowedTypes.length; i++) {
        // 3. 每次拿一个 allowed type 来比较
        if (a === allowedTypes[i]) {
            return true;
        }
    }
    return false;
}
// 4. 如果相等，返回 true
// 5. 如果全部都不相等，返回 false
console.log(validateUnionType(123, ["string", "number"])); // true
console.log(validateUnionType("hello", ["boolean", "number"])); // false
console.log(validateUnionType(true, ["boolean", "string"])); // true
console.log(validateUnionType({}, ["object", "number"])); // true
// easier using: includes()
//function validateUnionType(value: any, allowedTypes: string[]): boolean {
//     return allowedTypes.includes(typeof value);
// }
