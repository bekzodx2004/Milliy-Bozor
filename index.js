$(document).ready(function () {
  $(".owl-carousel1").owlCarousel();
});

$(".owl-carousel1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

var owl = $(".owl-carousel2");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  center: true,
  
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});


function toifa(){
  let t = document.getElementsByClassName("toifalar")
  for (let i = 0; i < t.length; i++) {
    if(t[i].style.display == "flex"){
      t[i].style.display = "none"
    }
  
    else{
      t[i].style.display = "flex"
    }
  }
 
}



var owl1 = $(".owl-carousel9");
owl1.owlCarousel({
  items: 3,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  dots: true,
  nav: false,
  center: true,
  
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});


var owl2 = $(".owl-customer");
owl2.owlCarousel({
  items: 3,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  center: true,
  
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});



function menu(){
  let menu = document.getElementById("menu")
  if(menu.style.display == "flex"){
    menu.style.display = "none"
  }
  else{
    menu.style.display = "flex"
  }
}
