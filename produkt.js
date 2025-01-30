let productId = 1165;
let product_list_container = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
            <a href="product.html" class="img_link">
            <div class="product_img_box">
              <img class="product-image" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Track Jacket" />
              <p class="discount_box">57%</p>
              <p class="sold_out_box">Sold Out</p>
            </div></a
          >
          <h3 class="productdisplayname">Track Jacket</h3>
          <div class="brand_info_box">
            <p class="brandname">Puma</p>
            <p>/</p>
            <p class="articletype">Jackets</p>
          </div>
          <div class="price_box">
            <p class="prev-price">4299 kr</p>
            <p class="price">2450,43 kr</p>
            <a href="product.html">Read More</a>
          </div>
           `;
  });
