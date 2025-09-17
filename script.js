let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  if (cartItems) {
    cartItems.innerHTML = "";
    let sum = 0;
    cart.forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(div);
      sum += item.price;
    });
    total.textContent = "Total: $" + sum;
  }
}

window.onload = loadCart;
