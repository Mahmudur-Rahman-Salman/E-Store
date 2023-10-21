// responsive nav

function openNav() {
  document.getElementById("responsive-nav").style.height = "100%";
}
function closeNav() {
  document.getElementById("responsive-nav").style.height = "0%";
}

// load all products

const loadProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  displayProducts(data);
};

// display products

const displayProducts = (data) => {
  const productContainer = document.getElementById("product-container");
   
  data.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("card");
    productDiv.innerHTML = `
        <img src="${item.image}" alt="Avatar">
        <div class="container">
          <p>${item.category}</p>
          <h4><b>${item.title}</b></h4>
          <p>${item.description}</p>
          <p>$ ${item.price}</p>
        </div>
        `;
    productContainer.appendChild(productDiv);
    console.log(item);
  });
};

loadProducts();
