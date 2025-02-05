const category = new URLSearchParams(window.location.search).get("category");

let productItem = document.querySelector(".grid_1-1-1-1");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=32&category=${category}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => `
      <div class="product_list_container">
        <a href="product.html?id=${product.id}" class="img_link">
          <div class="product_img_box">
            <img class="product-image" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" 
              alt="${product.productdisplayname}" />
            ${product.discount ? `<p class="discount_box">-${product.discount}%</p>` : ""}
            ${product.soldout ? `<p class="sold_out_box">Sold Out</p>` : ""}
          </div>
        </a>
        <h3 class="productdisplayname">${product.productdisplayname}</h3>
        <div class="brand_info_box">
          <p class="brandname">${product.brandname}</p>
          <p>/</p>
          <p class="articletype">${product.articletype}</p>
        </div>
        <div class="price_box">
          ${product.discount ? `<p class="prev-price">${product.price || 0},-</p>` : ""}
          <p class="price">
            ${product.discount ? Math.floor(product.price * (1 - product.discount / 100)).toFixed(2) : product.price || 0},-
          </p>
          <a href="product.html?id=${product.id}">Read More</a>
        </div>
      </div>
    `
    )
    .join("");

  productItem.innerHTML = markup;
}
