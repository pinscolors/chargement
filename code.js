window.addEventListener("load",function () {
  var node = document.querySelector("[data-loading]");
  node.setAttribute("data-loading","complete");
})
$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});