//shopping cart app
let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];
function addToCart(id) {
  cart = { ...cart, [id]: 1 };
}
function increment(id) {
  cart = { ...cart, [id]: cart[id] + 1 };
}
function decrement(id) {
  cart = { ...cart, [id]: cart[id] - 1 };
}
console.log('List of Products')
console.log(products)
console.log(`Added Product 1 to cart`)
addToCart(1);
console.log(cart);
console.log(`Added Product 3 to cart`)
addToCart(3);
console.log(cart);
console.log(`Incremented one quantify of Product 1 to cart`)
increment(1)
console.log(cart);
console.log(`Incremented one more quantify of Product 1 to cart`)
increment(1)
console.log(cart);
console.log(`Decremented one quantify of Product 1 from cart`)
decrement(1)
console.log(cart);
console.log("Display Cart with Product Details")
products.map(value=>{
    cart[value.id] && console.log(`${value.name}-$${value.price}-${cart[value.id]}-$${value.price*cart[value.id]}`)
})
const total = products.reduce((sum,value)=> {
    return sum + value.price*(cart[value.id]??0)
},0)
console.log(`Order Value:${total}`)