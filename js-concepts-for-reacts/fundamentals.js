// 1. How to declare a variable using let and const
const fatherName = 'rafiq';
let season = 'rainy';
season = 'winter';

// 2. conditons
// 6 Basic conditions : >,<, ===, !==, <=, >=
// multiple conditions : &&, ||

if(fatherName === 'Rafiq' || season === 'rainy'){

}
else if(fatherName ==='rafiq'){

}
else{

}

// 3. Array
// index, 
// length, push,
const numbers = [12, 13, 26, 7];
numbers[0] = 56;

// 4. for loop
for(let i=0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

//5. Function
function multiply(num1, num1){
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 78);

//6. Object
// 3 ways to access property by name
const kPOP = {
    name:'jimin',
    age:'27',
    songs: ['promise', 'filter','lie']
}

const myVariable = 'age';

console.log(kPOP.age); // direct by property
console.log(kPOP['age']);// access via property name string 
console.log(kPOP[myVariable]); // access via property name in a variable