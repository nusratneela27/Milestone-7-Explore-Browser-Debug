const saveproduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value ="";
    quantityField.value ="";

    console.log(product,quantity)
    displayProduct(product,quantity)
    saveProductLocalStorage(product,quantity)
}

const displayProduct = (product, quantity)=>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText=`${product}: ${quantity}: `;
    ul.appendChild(li)
}

const getStoredShoppingCart = () =>{
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart = JSON.parse(storeCart)
    }
    return cart;
}

const saveProductLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringyfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringyfied)
}

const displayProductFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart()
    for (const product in savedCart ){
        const quantity = savedCart[product];
        displayProduct(product,quantity)
    }
}

displayProductFromLocalStorage()