const productListContainer = document.querySelector(".grid_1-1-1-1");
let url = "https://kea-alt-del.dk/t7/api/products";

function showProducts(data) {
  const markup = data
    .map((product) => {
      // forstå dette
      const isSoldOut = product.soldout === 1;
      const hasDiscount = product.discount > 0;
      let discountedPrice; // Opretter en variabel

      if (hasDiscount) {
        // Tjekker om der er rabat
        discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2); // Beregner rabatteret pris og afrunder til 2 decimaler
      } else {
        discountedPrice = null; // Hvis der ikke er rabat, sættes discountedPrice til null
      }

      return `
          <div class="product_list_container">
            <a href="product.html?id=${product.id}" class="img_link">
              <div class="product_img_box">
                <img class="product-image" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
                ${hasDiscount ? `<p class="discount_box">${product.discount}%</p>` : ""}
                ${isSoldOut ? `<p class="sold_out_box">Sold Out</p>` : ""}
              </div>
            </a>
            <h3 class="productdisplayname">${product.productdisplayname}</h3>
            <div class="brand_info_box">
              <p class="brandname">${product.brandname}</p>
              <p>/</p>
              <p class="articletype">${product.articletype}</p>
            </div>
            <div class="price_box">
              ${hasDiscount ? `<p class="prev-price">${product.price},-</p>` : ""}
              <p class="price">${discountedPrice || product.price},-</p>
              <a href="product.html?id=${product.id}">Read More</a>
            </div>
          </div>
        `;
    })
    .join("");

  productListContainer.innerHTML = markup;
}

// Funktion til at hente data fra API
function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProducts(data));
}
hentData();
