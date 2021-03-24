// TABS

$('.card').on('click', function () {
   let currTab = $(this).parent().index();
   $('.card').removeClass('card-active');
   $(this).addClass('card-active');

   $('.tab-content').removeClass('active');
   $('.tab-content').eq(currTab).addClass('active');
})


// HAMBURER

$('.hamburger').on('click', function () {
   $('.head__menu').toggle();
   $('.menu-close').on('click', function () {
      $('.head__menu').hide();
   })
})

// PARALLAX

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

// SWIPER

const swiper = new Swiper('.swiper-container', {
   direction: 'horizontal',
   spaceBetween: 50,
   slidesPerView: 4,
   loop: true,
   stopOnLastSlide: false,
   autoplay: {
      delay: 4000
   }
});

//MAP

var map;

DG.then(function () {
   map = DG.map('map', {
      center: [49.416293, 27.010283],
      zoom: 13
   });
});