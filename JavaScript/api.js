const API_LAPTOPS = 'https://dummyjson.com/products/category/laptops';
const API_CLOTHES = 'https://dummyjson.com/products/category/mens-shirts';
const API_FOODS = 'https://dummyjson.com/products/category/groceries';

fetch(API_LAPTOPS)
    .then(response => response.json())
    .then(data => displayProducts(data.products, 'laptops'))
    .catch(error => console.error('Error fetching laptops:', error));

fetch(API_CLOTHES)
    .then(response => response.json())
    .then(data => displayProducts(data.products, 'clothes'))
    .catch(error => console.error('Error fetching clothes:', error));


fetch(API_FOODS)
    .then(response => response.json())
    .then(data => displayProducts(data.products, 'foods'))
    .catch(error => console.error('Error fetching foods:', error));

function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.description.substring(0, 50)}...</p>
          <p class="price">$${product.price}</p>
        `;
        container.appendChild(productCard);
    });
}