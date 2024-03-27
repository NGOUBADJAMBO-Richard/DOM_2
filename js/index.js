document.addEventListener("DOMContentLoaded", function () {
  let colorBox = document.getElementById("color-box");
  let changeColorBtn = document.getElementById("change-color-btn");
  colorBox.addEventListener("click", function () {
    this.style.backgroundColor =
      "#" + Math.floor(Math.random() * 0123456789).toString(16);
  });
});
