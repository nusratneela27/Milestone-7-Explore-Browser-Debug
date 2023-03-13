let num = 0;
const intervalid = setInterval(() =>{
    console.log(++num)
    if(num == 10){
        clearInterval(intervalid)
    }
}, 1000
)
