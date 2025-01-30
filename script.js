function setupDropdownAndCart() {
  // Dropdown
  const selectedElement = document.querySelector(".selected");
  const optionsElement = document.querySelector(".options");

  if (selectedElement && optionsElement) {
    selectedElement.addEventListener("click", function () {
      if (!window.isSoldOut) {
        // Giver kun mulighed for at interegere med knap når den ikke er udsolgt
        optionsElement.style.display = optionsElement.style.display === "block" ? "none" : "block";
      }
    });

    const options = document.querySelectorAll(".option");
    options.forEach(function (option) {
      option.addEventListener("click", function () {
        if (!window.isSoldOut) {
          // Giver kun mulighed for at interegere med knap når den ikke er udsolgt
          selectedElement.textContent = option.textContent;
          optionsElement.style.display = "none";
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".dropdown")) {
        optionsElement.style.display = "none";
      }
    });
  }

  // "Add to Cart" button
  const addToCartButton = document.querySelector(".add-to-cart");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      if (!window.isSoldOut) {
        // Giver kun mulighed for at interegere med knap når den ikke er udsolgt
        alert("Good Boy 😇");
        // giver en alert
      }
    });
  }

  // CTA Button Dropdown
  const ctaButton = document.querySelector(".cta-button");
  const detailsList = document.querySelector(".details-list");

  if (ctaButton && detailsList) {
    ctaButton.addEventListener("click", function () {
      if (detailsList.style.display === "block") {
        detailsList.style.display = "none";
        this.textContent = "Show Details";
      } else {
        detailsList.style.display = "block";
        this.textContent = "Hide Details";
      }
    });
  }
}

// Burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

if (burger && nav && menu) {
  burger.addEventListener("click", burgerClick);
  function burgerClick() {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  }

  menu.addEventListener("click", menuClick);
  function menuClick() {
    burger.classList.remove("active");
    nav.classList.remove("active");
  }
}

// Call setup function
window.addEventListener("load", setupDropdownAndCart);
