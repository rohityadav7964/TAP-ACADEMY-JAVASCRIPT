const Scan = require("prompt-sync")();

let n = Number(Scan("Enter the size of array: "));

let b = new Array(n);

console.log("Enter the elements of array:");

for (let i = 0; i < b.length; i++) {
    b[i] = Number(Scan());
}

let sum = 0;
for (let i = 0; i < b.length; i++) {
    sum = sum + b[i];
}

console.log("The sum of array elements is: " + sum);