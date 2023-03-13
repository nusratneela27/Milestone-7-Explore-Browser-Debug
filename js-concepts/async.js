console.log(1)
console.log(2)
setTimeout(()=>{
    console.log('lazy nisa')
}, 4000)
console.log(4)
console.log(5)
console.log(6)

function doSomething(){
    console.log(3);
}

let num = 1
setInterval(() =>{
    console.log(num++)
}, 1000
)