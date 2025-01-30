document.querySelector(".selected").addEventListener("click", function () {
  var options = document.querySelector(".options");
  if (options.style.display === "block") {
    options.style.display = "none";
  } else {
    options.style.display = "block";
  }
});

var options = document.querySelectorAll(".option");
options.forEach(function (option) {
  option.addEventListener("click", function () {
    document.querySelector(".selected").textContent = option.textContent;
    document.querySelector(".options").style.display = "none";
  });
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".dropdown")) {
    document.querySelector(".options").style.display = "none";
  }
});

document.querySelector(".cta-button").addEventListener("click", function () {
  var detailsList = document.querySelector(".details-list");

  // Toggle the display of the details list
  if (detailsList.style.display === "block") {
    detailsList.style.display = "none";
    this.textContent = "Show Details";
  } else {
    detailsList.style.display = "block";
    this.textContent = "Hide Details";
  }
});

// burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

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

// ---------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Get the global `isSoldOut` value set by the data.js file
  let isSoldOut = window.isSoldOut || false;

  // Event listener for dropdown select
  document.querySelector(".selected").addEventListener("click", function () {
    var options = document.querySelector(".options");
    if (options.style.display === "block") {
      options.style.display = "none";
    } else {
      options.style.display = "block";
    }
  });

  // Handle the options and the select interaction for size selection
  var options = document.querySelectorAll(".option");
  options.forEach(function (option) {
    option.addEventListener("click", function () {
      if (!isSoldOut) {
        document.querySelector(".selected").textContent = option.textContent;
        document.querySelector(".options").style.display = "none";
      }
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      document.querySelector(".options").style.display = "none";
    }
  });

  // Toggle product details list
  document.querySelector(".cta-button").addEventListener("click", function () {
    var detailsList = document.querySelector(".details-list");

    // Toggle the display of the details list
    if (detailsList.style.display === "block") {
      detailsList.style.display = "none";
      this.textContent = "Show Details";
    } else {
      detailsList.style.display = "block";
      this.textContent = "Hide Details";
    }
  });

  // Burger menu
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const menu = document.querySelector(".menu");

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

  // Update sold-out status in event listener interactions
  if (isSoldOut) {
    let selected = document.querySelector(".selected");
    let options = document.querySelector(".options");
    let addToCartButton = document.querySelector(".add-to-cart");

    selected.innerHTML = "<s>Select Size</s>"; // Strike-through text
    options.style.display = "none";
    addToCartButton.innerHTML = "Sold Out";
    addToCartButton.disabled = true;
  }
});
