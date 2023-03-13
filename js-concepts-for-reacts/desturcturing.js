// 1. array destructuring
const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]

const [x, y] = numbers;

// console.log(x, y)

function boxify (num1, num2){
    const nums = [num1, num2]
    return nums;
}

// const [first, second] = [90, 70]
const [first, second] = boxify(90, 34);

console.log(boxify(90, 70));

const kPOP = {
    name:'jimin',
    age:'27',
    songs: ['promise', 'filter','lie']
}

const [firstSong, secondSong, thirdSongs] = kPOP.songs


// object destructuring
const {name, age} = {name: 'alu', age: 23};
const {id, names, ages} = {id:12 ,name: 'alu', salary:3400, age: 23};

const employee ={
    ide: 'VS code',
    desgination: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification:{
        height: 56,
        weight: 67,
        adress:'mirpur',
        drink:'water',
        watch:{
            color: 'black',
            price: 500,
            brand:'garim'
        }
    }
}

const {machine, ide} = employee;
const {weight, adress} = employee.specification;
const {brand} = employee.specification.watch;
// const {brand} = employee?.specification?.watch;   ----karo na thakle specificaton tokhn ? dibo
