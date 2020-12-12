$(document).ready(function() {
    $('.main_slider').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        
    })

    AOS.init({
      // Global settings:
  disable: 'tablet', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 160, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    $('#first__item').click(function(){
        $('#first__modal').addClass('active');
        $('body').addClass('lock');
    });
    $('#second__item').click(function(){
        $('#second__modal').addClass('active');
        $('body').addClass('lock');
    });
    $('#third__item').click(function(){
        $('#third__modal').addClass('active');
        $('body').addClass('lock');
    });
    $('#fourth__item').click(function(){
        $('#fourth__modal').addClass('active');
        $('body').addClass('lock');
    });
    let modal = document.querySelectorAll('.modal');
    $('.modal').click(function(e){
        for (let i = 0; i < modal.length; i++) {
            if (e.target == modal[i]) {
                $('.modal').removeClass('active');
                $('body').removeClass('lock');
            }
        }
    });
});