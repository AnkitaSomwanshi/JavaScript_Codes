let value =3
let negValue = -value
console.log(negValue)

console.log(2+4)
console.log(4-1)
console.log(5*2)
console.log(9%3)
console.log(4/2)

let str1 = "Hello"
let str2 = "Ankita"

let str3 = str1 + str2
console.log(str3)

console.log("1"+2+2); //122 if string comes first then it treats string to all values
console.log(1+2+"2"); //32 if string comes at the last then it performs given operations first and then append the string 

//console.log(str1+str2)

/* Comparison */
// following types of comparison always creates confusion

console.log("2">1); //different data types can't be compare
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0 );
console.log(undefined < 0 );

// === (strict check of value as well as its data type too)

console.log("2" === 2)