let cart = [];

// Add items to cart
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (e) => {
        let productName = e.target.previousElementSibling.previousElementSibling.textContent;
        let productPrice = e.target.previousElementSibling.textContent;

        cart.push({ name: productName, price: productPrice });
        alert(`${productName} added to cart!`);
    });
});

// Display cart items on cart page
if (window.location.pathname.endsWith("cart.html")) {
    const cartItemsContainer = document.getElementById("cart-items");
    cart.forEach(item => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `;
    });
}
