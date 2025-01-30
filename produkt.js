let productId = 1165;
let product_list_container = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
        <div class="grid_1-1">
          <div>
            <img src="billeder/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
          </div>
          <div class="grid_1">
            <div class="top-info_product-box">
              <div class="brand_info_box">
                <p class="brandname">Nike</p>
                <p>/</p>
                <p class="articletype">Tshirts</p>
              </div>
              <h2 class="productdisplayname">Black Fleece Jacket</h2>
              <div class="price_box">
                <p class="prev-price">3999 kr</p>
                <p class="price">2.039,49 kr</p>
              </div>
            </div>
            <div class="buy_product-box">
              <div class="dropdown">
                <div class="selected">Select Size</div>
                <div class="options">
                  <div class="option">X-Small</div>
                  <div class="option">Small</div>
                  <div class="option">Medium</div>
                  <div class="option">Large</div>
                  <div class="option">X-Large</div>
                </div>
              </div>
              <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="Description_box">
              <div>
                <h4>Description</h4>
                <p>Blue round neck Sahara Team India jersey, has short sleeves, print on the chest and back chest. Warranty for manufacturing defects: 6 months (not valid on products with more than 20% discount).</p>
              </div>
              <div>
                <h4>Style Description</h4>
                <p>Cheer for the Indian cricket team on and off the fields in this blue polo neck jersey from Nike.</p>
              </div>
            </div>
            <div class="dropdown">
              <button class="cta-button">Show Details</button>
              <dl class="details-list">
                <div class="dropdown-item">
                  <dt>id number</dt>
                  <dd>1163</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Gender</dt>
                  <dd>Men</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Brand</dt>
                  <dd>Nike</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Category</dt>
                  <dd>Apparel - Topwear - Tshirts</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Base Colour</dt>
                  <dd>Blue</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Season</dt>
                  <dd>Summer</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Production Year</dt>
                  <dd>2011</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Usage Type</dt>
                  <dd>Sports</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Variant Name</dt>
                  <dd>Roundneck Jersey</dd>
                </div>

                <div class="dropdown-item">
                  <dt>Material Care</dt>
                  <dd>100% polyester. Machine wash.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
           `;
  });
