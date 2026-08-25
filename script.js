const products = [
    {
        name: "Elegant Pink Dress",
        price: 899,
        category: "Fashion",
        icon: "👗"
    },
    {
        name: "Classic Handbag",
        price: 699,
        category: "Fashion",
        icon: "👜"
    },
    {
        name: "Beauty Care Set",
        price: 499,
        category: "Beauty",
        icon: "💄"
    },
    {
        name: "Smart Phone",
        price: 9999,
        category: "Electronics",
        icon: "📱"
    },
    {
        name: "Home Decor Set",
        price: 799,
        category: "Home",
        icon: "🏠"
    },
    {
        name: "Stylish Sneakers",
        price: 1199,
        category: "Fashion",
        icon: "👟"
    }
];

const container = document.getElementById("productContainer");

function displayProducts(list) {

    container.innerHTML = "";

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `
            <div class="product-image">
                ${product.icon}
            </div>

            <h3>${product.name}</h3>

            <p>${product.category}</p>

            <p class="price">₹${product.price}</p>

            <button class="add-cart"
                onclick="addToCart('${product.name}')">
                Add to Cart
            </button>
        `;

        container.appendChild(card);
    });
}

function searchProducts() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const results = products.filter(product =>
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    );

    displayProducts(results);
}

function filterCategory(category) {

    const results =
        products.filter(product =>
            product.category === category
        );

    displayProducts(results);
}

function showAll() {
    displayProducts(products);
}

function addToCart(name) {
    alert(name + " added to cart 🛒");
}

function openAI() {
    document.getElementById("aiPanel").style.display = "block";
}

function closeAI() {
    document.getElementById("aiPanel").style.display = "none";
}

function handleEnter(event) {

    if (event.key === "Enter") {
        sendAI();
    }
}

function sendAI() {

    const input =
        document.getElementById("aiInput");

    const message = input.value.trim();

    if (!message) return;

    const chat =
        document.getElementById("chatMessages");

    chat.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    let reply =
        "I can help you find products based on your budget, category and occasion. 🤖";

    if (message.toLowerCase().includes("dress")) {
        reply =
            "I found some fashion options for you. Try the Elegant Pink Dress for ₹899. 👗";
    }

    if (message.toLowerCase().includes("budget")) {
        reply =
            "Tell me your maximum budget, and I'll help you find matching products. 💰";
    }

    chat.innerHTML += `
        <div class="ai-message">
            ${reply}
        </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}

displayProducts(products);
