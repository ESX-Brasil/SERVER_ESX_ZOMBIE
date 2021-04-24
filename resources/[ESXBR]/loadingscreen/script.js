$(document).ready(function(){
   var imgs = $(".bg-img");
   i = -1;
   (function slideshow() {
     i = (i + 1) % imgs.length;

     $(imgs).not(imgs[i]).removeClass("slide-active")
     $(imgs[i]).addClass("slide-active")
     setTimeout(slideshow, 7000);
   })();
});