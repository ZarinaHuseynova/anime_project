// var myCarousel = document.querySelector('#carouselExampleControls')
// var carousel = new bootstrap.Carousel(myCarousel)

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     effect: "fade",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });

   //Initialize Swiper
  
      // var swiper = new Swiper(".mySwipper__slider", {
      //   spaceBetween: 30,
      //   effect: "fade",
      //   navigation: {
      //     nextEl: ".owl__next",
      //     prevEl: ".owl__prev"
      //   },
      // //   pagination: {
      // //     el: ".swiper-pagination",
      // //     clickable: true
      // //   },
      //   on: {
      //     slideChange: function () {
      //       swiper.slides.forEach((element) => {
      //         element.firstElementChild.classList.add("passive");
      //         element.firstElementChild.classList.remove("active");
      //       });
      //       swiper.slides[swiper.activeIndex].firstElementChild.classList.add(
      //         "active"
      //       );
      //     }
      //   }
      // });