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
        <div class="card-details">
        <div class="title">
        ${item.title}    
        </div>
        <p>${item.category}</p>
        <p>$ ${item.price}</p>
        <button onClick ="loadSingleProductDetails('${item.id}')" class="card-button">Read more</button>
        </div>
        `;
    productContainer.appendChild(productDiv);
    // console.log(item);
  });
};

// load single details

const loadSingleProductDetails = async (id) => {
  console.log(id);

  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  displaySingleProductDetails(data);
};

const displaySingleProductDetails = (data) => {
  console.log(data);


//   const detailsContainer = document.getElementById(
//     "single-product-details-section"
//   );

//   const details = document.createElement("div");
//   details.innerHTML = `
//     <p>${data.title}</p>
//     `;

//   detailsContainer.appendChild(details);
};
loadProducts();
