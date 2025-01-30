let productId = 1165;
let product_list_container = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    
           `;
  });
