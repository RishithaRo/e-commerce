const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  if (btn.textContent === "Add to Cart") {
    btn.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  }
});
