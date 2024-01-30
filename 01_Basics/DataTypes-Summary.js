// In Javascript there is no need to define type of data 

// JavaScript is a dynamically typed language, 
// which means that data types of variables are determined by the value they hold at runtime 
// and can change throughout the program as we assign different values to them.

// 1. primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol(To make any Value unique), BigInt

// 2.Reference (Non Primitive)

// Array, Objects, Functions (Who's Reference can be directly allocated in memory)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 45678905678n

// Arrays

const heros = ["shaktiman", "naagraj", "doga"]

// Objects

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function()
{
    console.log("Hello World");
}

console.log(typeof myFunction)