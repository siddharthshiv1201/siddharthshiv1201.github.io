let cart = {};

const products = [
  { id: 1, name: "Rice", price: 40, category: "Groceries" },
  { id: 2, name: "Wheat Flour", price: 55, category: "Groceries" },
  { id: 3, name: "Paracetamol", price: 30, category: "Medical" },
  { id: 4, name: "Thermometer", price: 120, category: "Medical" },
  { id: 5, name: "Football", price: 499, category: "Sports" },
  { id: 6, name: "Cricket Bat", price: 799, category: "Sports" },
];

// Show home page with categories
function showHome() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(category => {
    const section = document.createElement("div");
    section.className = "section";

    const heading = document.createElement("h2");
    heading.textContent = category;
    section.appendChild(heading);

    products
      .filter(p => p.category === category)
      .forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
          <div class="product-info">
            <p><strong>${p.name}</strong></p>
            <p>Price: ₹${p.price}</p>
          </div>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;

        section.appendChild(card);
      });

    root.appendChild(section);
  });
}

// Add to cart
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartCount();
  showToast("Item added to cart!");
}

// Show cart page
function showCart() {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Your Cart</h2>";

  let total = 0;

  for (let id in cart) {
    const product = products.find(p => p.id == id);
    const quantity = cart[id];
    const amount = quantity * product.price;
    total += amount;

    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <p><strong>${product.name}</strong> - ₹${product.price} × ${quantity} = ₹${amount}</p>
      <div>
        <button onclick="increment(${id})">+</button>
        <button onclick="decrement(${id})">-</button>
      </div>
    `;
    root.appendChild(item);
  }

  if (total === 0) {
    const empty = document.createElement("p");
    empty.textContent = "🛒 Your cart is empty.";
    root.appendChild(empty);
  } else {
    const totalEl = document.createElement("div");
    totalEl.className = "cart-total";
    totalEl.textContent = `Total Order Value: ₹${total}`;
    root.appendChild(totalEl);
  }
}

// Increment quantity
function increment(id) {
  cart[id]++;
  updateCartCount();
  showCart();
}

// Decrement quantity
function decrement(id) {
  cart[id]--;
  if (cart[id] <= 0) delete cart[id];
  updateCartCount();
  showCart();
}

// Update cart badge count
function updateCartCount() {
  let count = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById("cart-count").textContent = count;
}

// Show toast message
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#28a745";
  toast.style.color = "white";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "5px";
  toast.style.boxShadow = "0 5px 10px rgba(0,0,0,0.2)";
  toast.style.zIndex = "9999";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}

// Load home initially
showHome();
