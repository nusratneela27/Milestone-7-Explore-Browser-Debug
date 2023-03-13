const numbers = [12, 13, 26, 7];
const kPOP = {
    name:'jimin',
    age:'27',
    songs: ['promise', 'filter','lie']
}


// 1. Template string
const about = `my name is ${kPOP.name} age of ${kPOP.age} has number ${numbers[2]} also liked songs ${kPOP.songs[0]} `;
console.log(about)

// 2. Arrow funtion
const getThirty = () => 13;  //simple arrow function
const addTwentySix = num => num + 26;   //with single parameter
const isEven = x => x % 2 == 0;
const addThree = (x, y , z) => x + y + z;    //with multiple parameter
const doMath = (num1, num2) => {
    const sum = num1 + num2;              //multiLine with return
    return sum;
}

// spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];



numbers.push(99);
numbers.push(99);
numbers.push(99);



console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
