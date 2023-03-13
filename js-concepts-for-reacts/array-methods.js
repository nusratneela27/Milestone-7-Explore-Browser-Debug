const products = [     // array of objects
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// map kono kisu return korbe. tai bam pashe const diye variable ratkhe hobe

const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices)




// forEach kono kisu return korbe na

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

products.forEach(product => {

    //eikhane getElementById , getElementByClass, etc likhbo
    
});


// 3. filter (jara condition puron korbe tader dibe array er moddhe)
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);


const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName)



//4. find  (first a jetake pabe seitake show korbe object a)
const special = products.find(product => product.name.includes('n'))
console.log(special)