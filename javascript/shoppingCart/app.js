let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

// Show home page (products)
function showHome() {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Products</h2>";
  products.map(p => {
    const item = document.createElement("div");
    item.innerHTML = `
      <p><strong>${p.name}</strong> - ₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    root.appendChild(item);
  });
}

// Add to cart
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  alert("🛒 Item added to cart!");
}


// Show cart page
function showCart() {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Your Cart</h2>";

  let total = 0;
  products.map(p => {
    if (cart[p.id]) {
      const quantity = cart[p.id];
      const amount = quantity * p.price;
      total += amount;

      const item = document.createElement("div");
      item.innerHTML = `
        <p><strong>${p.name}</strong> - ₹${p.price} × ${quantity} = ₹${amount}</p>
        <button onclick="increment(${p.id})">+</button>
        <button onclick="decrement(${p.id})">-</button>
      `;
      root.appendChild(item);
    }
  });

  const totalEl = document.createElement("h3");
  totalEl.innerText = `Total Order Value: ₹${total}`;
  root.appendChild(totalEl);
}

// Increase quantity
function increment(id) {
  cart[id]++;
  showCart();
}

// Decrease quantity
function decrement(id) {
  cart[id]--;
  if (cart[id] <= 0) delete cart[id];
  showCart();
}

// Load home on first load
showHome();
