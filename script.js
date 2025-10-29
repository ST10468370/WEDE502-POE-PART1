// Sample product data//
const products = [
{ id: 1,name:"Heron", price:R12500},
{ id: 2, name:"Malkoha", price: R10000},
{ id: 3, name:"Barbet", price: R8000},




];

const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('SearchInput'); 
const sortSelect = document.getElementById('sortSelect');

// Function to display products
function displayProducts(items) {
   productContainer.innerHTML = ''; // Clear previous content
   items.forEach(item => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
    <div class="product-name">${item.name}</div>
    <div>Price: $${item.price}</div>
    `;
    productContainer.appendChild(productDiv);


});

}

//Function to Filter and sort products
function filterAndSortProducts(){
let filteredProducts = products.filter(product =>
   product.name.toLowerCase().includes(searchInput.value.toLowerCase())
);

const sortValue = sortSelect.vlaue;
if (sortValue === 'name-asc') filteredProducts.sort((a,b) => a.name.localeCompare(b.name));
if (sortValue === 'name-desc') filteredProducts.sort((a,b) => b.name.localeCompare(a.name));
if (sortValue === 'price-asc') filteredProducts.sort((a,b) => a.price - b.price);
if (sortValue === 'price-asc') filteredProducts.sort((a,b) => b.price - a.price);

displayProducts(filteredProducts);
}

//Initial display 
displayProducts(products);

//Event listeners
searchInput.addEventListener('input', filterAndSortProudcts);
sortSelect.addEventListener('change', filterAndSortProducts);
