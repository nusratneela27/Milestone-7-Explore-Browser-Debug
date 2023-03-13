const addProduct = () => {
    const productField = document.getElementById('product-name'); 
    const quantityField = document.getElementById('quantity-name');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value ='';
    quantityField.value ='';

    console.log(product, quantity);
    displayProduct(product, quantity)
    saveProductLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}: `;
    ul.appendChild(li)
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        // string a set korbe cart a
        cart = JSON.parse(storeCart);     
    }
    return cart;
}

const saveProductLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    console.log(cart);
    const stingified = JSON.stringify(cart);
    localStorage.setItem('cart', stingified)
}

const displayProductFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product, quantity)
        displayProduct(product,quantity)
    }
}

displayProductFromLocalStorage();