const addToLocalStorage = () =>{
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    
    
    // 
    if(id && value){
    localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value ='';
}

localStorage.setItem('friends', JSON.stringify([45, 78, 98]))

const pen = {price: 10 , color: 'blue'};
localStorage.setItem('pen', JSON.stringify(pen))