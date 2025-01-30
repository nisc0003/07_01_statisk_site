let productId = 1163;
let productContainer = document.querySelector(".product_container");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let isSoldOut = data.soldout || false; // Assume API has 'soldout' property

    productContainer.innerHTML = `
        <div class="grid_1-1">
 <div class="product_img_box">
              <img class="product-image" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${data.productdisplayname}" />
              <p class="discount_box">${data.discount}</p>
            </div>
          <div class="grid_1">
            <div class="top-info_product-box">
              <div class="brand_info_box">
                <p class="brandname">${data.brandname}</p>
                <p>/</p>
                <p class="articletype">${data.articletype}</p>
              </div>
              <h2 class="productdisplayname">${data.productdisplayname}</h2>
              <div class="price_box">
                <p class="prev-price">${data.price},-</p>
                <p class="price">${data.price},-</p>
              </div>
            </div>
                <div class="buy_product-box">
              <div class="dropdown">
                <div class="selected">${isSoldOut ? "<s>Select Size</s>" : "Select Size"}</div>
                <div class="options">
                  <div class="option">${isSoldOut ? "<s>X-Small</s>" : "X-Small"}</div>
                  <div class="option">${isSoldOut ? "<s>Small</s>" : "Small"}</div>
                  <div class="option">${isSoldOut ? "<s>Medium</s>" : "Medium"}</div>
                  <div class="option">${isSoldOut ? "<s>Large</s>" : "Large"}</div>
                  <div class="option">${isSoldOut ? "<s>X-Large</s>" : "X-Large"}</div>
                </div>
              </div>
              <button class="add-to-cart" ${isSoldOut ? "disabled" : ""}>
                ${isSoldOut ? "Sold Out" : "Add to Cart"}
              </button>
            </div>
            <div class="Description_box">
              <div>
                <h4>Description</h4>
                <p>${data.description}</p>
              </div>
              <div>
                <h4>Style Description</h4>
                <p>${data.styledesc}</p>
              </div>
            </div>
            <div class="dropdown">
              <button class="cta-button">Show Details</button>
              <dl class="details-list">
                <div class="dropdown-item">
                  <dt>id number</dt>
                  <dd>${productId}</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Gender</dt>
                  <dd>${data.gender}</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Category</dt>
                  <dd>${data.category} - ${data.subcategory} - ${data.articletype}</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Variant Name</dt>
                  <dd>${data.variantname}</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Brand</dt>
                  <dd>${data.brandname}</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Production Year</dt>
                  <dd>${data.productionyear}</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Usage Type</dt>
                  <dd>${data.usagetype}</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Season</dt>
                  <dd>${data.season}</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Base color</dt>
                  <dd>${data.basecolour}</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Material Care</dt>
                  <dd>${data.materialcaredesc}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
    `;
  });
