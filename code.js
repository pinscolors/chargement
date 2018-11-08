//chargement..
window.addEventListener("load", function () {
  var node = document.querySelector("[data-loading]");
  node.setAttribute("data-loading","complete");
})
//carrousel
// burger togglemenu
var $nav = $('.menu')
$('.togglemenu').on('click',function (){
  $nav.toggleClass('active')
})


var $test =
$('p').on('click',function (){
  console.log('test test test')
}) 
