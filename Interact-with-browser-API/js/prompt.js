const showAlert = () =>{
    alert('tk dhar de')
}

const lendMoney =() =>{
   const result = confirm('will you lend me money')
   console.log(result)
   if(result == true){
    alert('tui amr jaan er dosto')
   }
   else{
    console.log('dure jaaa...')
   }
}

const getInfo = () =>{
    const name = prompt('nam bol')
    console.log(name);
    if(name === null){
        alert('nam na dile kam nai... jaa futtt')
    }
    else{
        console.log( name , 'welcome')
    }
}