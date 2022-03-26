const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

var loader = document.getElementById('loader');
  window.addEventListener("load", function(){
      loader.style.display = "none";
  })