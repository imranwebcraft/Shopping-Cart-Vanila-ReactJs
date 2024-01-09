// Catch DOM elements
const button = document.getElementById('button');
const price = document.getElementById('price');
const total = document.getElementById('totalPrice');

// Data
const productPrice = 5000;
let totalPrice = 0;

// Initial price of the product
price.innerText = `৳ ${productPrice}`;
total.innerText = `Total: ৳ ${totalPrice}`;

button.addEventListener('click', () => {
	totalPrice += productPrice;

	// Reflect the cahnge to the UI
	total.innerText = `Total: ৳ ${totalPrice}`;
});
