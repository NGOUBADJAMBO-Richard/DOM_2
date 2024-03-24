document.addEventListener("DOMContentLoaded", function () {
  let colorBox = document.getElementById("color-box");
  let changeColorBtn = document.getElementById("change-color-btn");
  colorBox.addEventListener("click", function () {
    this.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
});
