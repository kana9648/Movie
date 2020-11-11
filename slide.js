const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
const slide = _ => {
  const wrap = one('.slide')
  const target = wrap.children[0]
  const len = target.children.length
  const liStyle = `
    position:absolute;
    left:0;right:0;top:0;bottom:0;transition:1s;opacity:0
  `
  target.style.cssText = `position:relative;`
  Array.from(target.children).forEach(ele => ele.style.cssText = liStyle)
  target.children[0].style.opacity = 1
  let pos = 0
  setInterval(_ => {
    target.children[pos].style.opacity = 0
    pos = (pos + 1) % len 
    target.children[pos].style.opacity = 1
  }, 3500)
}
window.onload = function () {
  slide()
}

function main(){
    window.location = "main.html"
}

function login(){
    window.location= "https://kana9648.github.io/Movie/login.html"
}

function join(){
    window.location = "https://kana9648.github.io/Movie/in.html"
}

function board_1(){
    window.location = "http://haha922.dothome.co.kr/movie_html.html"
}

function board_2(){
    window.location = "http://ieouy0605.dothome.co.kr/subpage/subpage/board.html"
}

function board_3(){
    window.location ="https://kana9648.github.io/Movie/read.html"
}

function board_4(){
    window.location = "http://kimhappy93.dothome.co.kr/movie_detail.html"
}

function seoul(){
   
}

/*      


*/


//var slideIndex = 1;
//showDivs(slideIndex);
//
//function plusDivs(n) {
//  showDivs(slideIndex += n);
//}
//
//function showDivs(n) {
//  var i;
//  var x = document.getElementsByClassName("post_view");
//  if (n > x.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = x.length}
//  for (i = 0; i < x.length; i++) {
//    x[i].style.display = "none";  
//  }
//  x[slideIndex-1].style.display = "block";  
//}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("post_view");
  if (n > slides.length){
      slideIndex = 1
  }    
  if (n < 1){
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}















































































































