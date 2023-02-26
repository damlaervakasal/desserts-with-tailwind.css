console.log("damla");

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

const swiperEl = new Swiper(".swiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 0,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

$(swiperEl).keydown(function (e) {
  if (e.keyCode == 37) {
    $("#next").click(); //on left arrow, click next (since your next is on the left)
  } else if (e.keyCode == 39) {
    $("#prev").click(); //on right arrow, click prev
  }
});

// $(document).ready(function () {
//   $(".carousel").carousel();
// });

// function nextSlide() {
//   document.getElementById("next").nextSibling;
// }

// function previousSlide() {
//   document.getElementById("previous").previousElementSibling;
// }

// const slideIndex = 1;
// showSlides(slideIndex);

// //next-previous controls
// function plusSlide(n) {
//   showSlides(slideIndex + n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   // for (i = 0; i < dots.length; i++) {
//   //   dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   slides[slideIndex - 1].style.display = "block";
//   // dots[slideIndex - 1].className += " active";
// }
