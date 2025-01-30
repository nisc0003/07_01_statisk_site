// Existing dropdown functionality for the "Select Size" dropdown
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

// New dropdown functionality for the "Show Details" button (the <dl> list)
document.querySelector(".cta-button").addEventListener("click", function () {
  var detailsList = document.querySelector(".details-list");

  // Toggle the display of the details list
  if (detailsList.style.display === "block") {
    detailsList.style.display = "none";
    this.textContent = "Show Details"; // Change button text back to "Show Details"
  } else {
    detailsList.style.display = "block";
    this.textContent = "Hide Details"; // Change button text to "Hide Details"
  }
});
