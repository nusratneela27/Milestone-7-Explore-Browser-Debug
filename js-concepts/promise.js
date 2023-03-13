const getData = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        resolve(777)
    }
    else{
        reject('no data here')
    }
})

getData
    .then(data => console.log(data + 2))
    .catch(err => console.error('ERR:' , err))