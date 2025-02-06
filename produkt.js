const productId = new URLSearchParams(window.location.search).get("id");

let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
      <div class="grid_1-1">
        <div class="product_img_box">
          <img class="product-image" 
               src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" 
               alt="${data.productdisplayname}" />
          <p class="discount_box ${data.discount ? "discountActive" : "discountHidden"}">-${data.discount}%</p>
        </div>
        <div class="grid_1">
          <div class="top-info_product-box">
            <div class="brand_info_box">
              <p class="articletype">${data.articletype}</p>
              <p>/</p>
              <p class="brandname">${data.brandname}</p>
            </div>
            <h2 class="productdisplayname">${data.productdisplayname}</h2>
            <div class="price_box">
              <p class="prev-price ${data.discount ? "prevPriceActive" : "prevPriceHidden"}">${data.price},-</p>
              <p class="price">
                ${data.discount ? Math.floor(data.price * (1 - data.discount / 100)).toFixed(2) : data.price},-
              </p>
            </div>
          </div>
          <div class="buy_product-box">
            <div class="dropdown">
              <div class="selected">
                ${data.soldout ? "No sizes available" : "Select Size"}
              </div>
              <div class="options">
                <div class="option ${data.soldout ? "optionsoldOutHidden" : "optionsoldOutActive"}">X-Small</div>
                <div class="option ${data.soldout ? "optionsoldOutHidden" : "optionsoldOutActive"}">Small</div>
                <div class="option ${data.soldout ? "optionsoldOutHidden" : "optionsoldOutActive"}">Medium</div>
                <div class="option ${data.soldout ? "optionsoldOutHidden" : "optionsoldOutActive"}">Large</div>
                <div class="option ${data.soldout ? "optionsoldOutHidden" : "optionsoldOutActive"}">X-Large</div>
              </div>
            </div>
            <button class="add-to-cart" ${data.soldout ? "disabled" : ""}>
              ${data.soldout ? "Sold Out" : "Add to Cart"}
            </button>
          </div>
          <div class="Description_box">
            <div>
              <h4>Description</h4>
              <p>${data.description || "No description available"}</p>
            </div>
            <div>
              <h4>Style Description</h4>
              <p>${data.styledesc ? data.styledesc : "No style description available"}</p>
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
  <dd class="hidden ${data.variantname && "show"}">${data.variantname}</dd>
</div>
<div class="dropdown-item">
  <dt>Brand</dt>
  <dd class="hidden ${data.brandname && "show"}">${data.brandname}</dd>
</div>
<div class="dropdown-item">
  <dt>Production Year</dt>
  <dd class="hidden ${data.productionyear && "show"}">${data.productionyear}</dd>
</div>
<div class="dropdown-item">
  <dt>Usage Type</dt>
  <dd class="hidden ${data.usagetype && "show"}">${data.usagetype}</dd>
</div>
<div class="dropdown-item">
  <dt>Season</dt>
  <dd class="hidden ${data.season && "show"}">${data.season}</dd>
</div>

              <div class="dropdown-item">
                <dt>Base color</dt>            
           <dd class="hidden ${data.basecolour && "show"}">${data.basecolour}</dd>
              </div>
              <div class="dropdown-item">
                <dt class="hidden ${data.materialcaredesc && "show"}"> Material Care</dt>
                <dd class="hidden ${data.materialcaredesc && "show"}">${data.materialcaredesc}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    `;

    setupDropdownAndCart();
  });
