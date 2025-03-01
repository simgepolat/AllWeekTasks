const user = {
    name: prompt("Adınız:"),
    age: Number(prompt("Yaşınız:")),
    job: prompt("Mesleğiniz:")
};

let cart = [];

function displayUserInfo() {
    document.getElementById('userDetails').innerHTML = `
        <div>İsim: ${user.name}</div>
        <div>Yaş: ${user.age}</div>
        <div>Meslek: ${user.job}</div>
    `;
}

function addProduct() {
    const nameProduct = prompt("Ürün adı:");
    const priceProduct = Number(prompt("Fiyatı:"));
    
    if (nameProduct && priceProduct) {
        cart.push({ nameProduct, priceProduct });
        displaycart();
    }
}

function removeProduct(productName) {
    cart = cart.filter(item => item.nameProduct !== productName);
    displaycart();
}

function displaycart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Sepetiniz boş</p>';
        document.getElementById('totalPrice').textContent = '';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="product-item">
            ${item.nameProduct} - ${item.priceProduct} TL
            <button class="remove" onclick="removeProduct('${item.nameProduct}')">Sil</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.priceProduct, 0);
    document.getElementById('totalPrice').textContent = `Toplam: ${total} TL`;
}

displayUserInfo();
displaycart();
