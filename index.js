const categoriesContainer = document.querySelector(".grid_1-1-1");
fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => renderCategories(data));

function renderCategories(categories) {
  const markup = categories
    .map(
      (category) => `
        <div class="category_list_container">
          <a class="category_list_button" href="productlist.html?category=${category.category}">
            ${category.category}
          </a>
        </div>
      `
    )
    .join("");

  categoriesContainer.innerHTML = markup;
}
