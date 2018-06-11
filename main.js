function animateBorders() {
  $('.is-first-border').toggleClass('animate-first-border');
  $('.is-second-border').toggleClass('animate-second-border');
}

function appearVariants() {
  const productVariants = document.querySelectorAll('.product-variants a');

  productVariants.forEach(function (productVariants, index) {
    const delay = index * 100;
    productVariants.style.transitionDelay = delay + 'ms';
  });

  $(productVariants).addClass('variants-fade-in');
  $('h2.product-variant-h2').addClass('has-opacity');
}

function appearRest() {
  const everythingButLines = document.querySelectorAll(
    '.product-info-inner, .product-name-container, .product-chosen-container, .product-size-container, .add-to-cart-container'
  );

  everythingButLines.forEach(function (everythingButLines, index) {
    const delay = index * 120;
    // everythingButLines.style.transitionDelay = delay + 'ms';
    // everythingButLines.style.WebkitTransitionDelay = delay + 'ms';
  });

  $(everythingButLines).addClass('has-opacity');
  $('.main-img-container').addClass('has-opacity');
  $('.add-to-cart-bcgd').addClass('animate-up');
}

function animateProductLines() {
  const productLines = document.querySelectorAll('.separator-line');
  const productChosenLines = productLines[1];
  // if you want to grab more than 1 element in an array, here's how
  // const productChosenLines = Array.prototype.slice.call(productLines, 1, 3);

  $('.separator-line').addClass('animate-left');
  // Remove animations if widow is bigger than iPad Mini Version
  if ($(window).width() >= 768) {
    $(productChosenLines).removeClass('animate-left');
  } else {}

  if ($(window).width() <= 768) {
    $('.is-second-border').css('transform', 'scaleX(1)');
  } else {}

  if ($(window).width() <= 414) {
    $('.is-first-border').css('transform', 'scaleX(1)');
  } else {}
}

function addBigContainer() {
  $('.big-slide-container').addClass('slider-animation-appear');
}

var currentSlide = 0;

function animateBigSlides() {
  const slides = document.querySelectorAll('#big-slide-img-container div');

  var previousSlide = slides[currentSlide - 1];
  var previousPreviousSlide = slides[currentSlide - 2];
  var slide = slides[currentSlide];

  var nextSlide = slides[currentSlide + 1];
  var maxSlides = slides.length;
  var lastSlide = $(slides).last();

  currentSlide = currentSlide + 1;

  slides.forEach(function (slides, index) {
    $(slide).addClass('is-current-slide');
    $(slide).removeClass('is-not-current');
    $(lastSlide).removeClass('is-current-slide');
    $(lastSlide).removeClass('will-be-current');

    $(previousSlide).removeClass('is-not-current');
    $(previousSlide).removeClass('will-be-current');
    $(slide).addClass('slider-image-scale-appear');
    $(nextSlide).addClass('slider-image-scale-reverse');
    $(nextSlide).addClass('will-be-current');

    // las clases se van sacando con previousSlide y slide, se deja el lastslide para el loop cuando vuelve a empezar. hay que sacarle el currentslide porque al loopear no entra en la categoría de previousSlide, entonces se hace una clase especial para este último elemento.
  });

  $(slide).removeClass('slider-image-scale-reverse');
  $(slide).removeClass('slider-image-appear');
  $(slide).removeClass('is-not-current-slide');
  // $(previousSlide).addClass('is-not-current-slide');
  $(previousSlide).removeClass('is-current-slide');

  $(previousPreviousSlide).removeClass('slider-image-scale-appear');

  if (currentSlide >= 4) {
    $(slides).css('transform', 'translateY(0)');
    currentSlide = 0;

    // Add clases for first time
    // Aca repite lo del principio MENOS lo del lastSlide, porque este actúa como el loop del último slide.
    $(slide).addClass('is-current-slide');
    $(slide).removeClass('is-not-current');

    $(previousSlide).removeClass('is-not-current');
    $(previousSlide).removeClass('will-be-current');
    $(slide).addClass('slider-image-scale-appear');
    $(nextSlide).addClass('slider-image-scale-reverse');
    $(nextSlide).addClass('will-be-current');
  }
}

currentSmallSlide = 0;

function animateSmallSlides() {
  const smallSlides = document.querySelectorAll('.small-slide div');

  var previousSmallSlide = smallSlides[currentSmallSlide - 1];
  var smallSlide = smallSlides[currentSmallSlide];

  var nextSmallSlide = smallSlides[currentSmallSlide + 1];
  var maxSmallSlides = smallSlides.length;
  var lastSmallSlide = $(smallSlides).last();
  var firstSmallSlide = $(smallSlides).first();

  currentSmallSlide = currentSmallSlide + 1;

  smallSlides.forEach(function (smallSlides, index) {
    $(smallSlide).addClass('small-slider-fade-out');
    $(nextSmallSlide).addClass('small-slider-fade-in');

    $(previousSmallSlide).removeClass('small-slider-fade-out');
    $(smallSlide).removeClass('small-slider-fade-in');
  });

  // Remove the opacity from the first slide, outside the loop in order to appear after the animation
  $(firstSmallSlide).addClass('is-not-visible');

  if (currentSmallSlide >= 4) {
    currentSmallSlide = 0;
    // $(firstSmallSlide).removeClass('is-not-visible');
    $(firstSmallSlide).addClass('small-slider-fade-in');
    // Add clases for first time
    // Aca repite lo del principio MENOS lo del lastSlide, porque este actúa como el loop del último slide.
    $(smallSlide).addClass('small-slider-fade-out');
    $(nextSmallSlide).addClass('small-slider-fade-in');
  }
}

currentPhrase = 1;

function animatePhrases() {
  // Define phrases
  const phrases = document.querySelectorAll('.phrase');

  var phrase = phrases[currentPhrase];
  var previousPhrase = phrases[currentPhrase - 1];
  var previousPreviousPhrase = phrases[currentPhrase - 2];
  var firstPhrase = $(phrases).first();
  var nextPhrase = phrases[currentPhrase + 1];
  var maxPhrase = phrases.length;
  var lastPhrase = $(phrases).last();

  currentPhrase = currentPhrase + 1;

  phrases.forEach(function (phrases, index) {
    $(previousPhrase).addClass('was-active-y');
    // $(previousPreviousPhrase).removeClass('was-active-y');
    $(phrase).removeClass('was-active-y');
    $(phrase).addClass('is-active-y');
  });

  // $(previousPhrase).removeClass('was-active-y');
  $(previousPhrase).removeClass('is-active-y');
  $(previousPreviousPhrase).addClass('will-be-active-y');
  $(previousPreviousPhrase).removeClass('was-active-y');

  // $(previousPreviousPhrase).removeClass('was-active-y');

  if (currentPhrase == maxPhrase + 1) {
    $(phrases).addClass('will-be-active-y');
    // $(phrases).addClass('LOOP HAS RESTARTED');
    $(phrases).removeClass('was-active-y');
    currentPhrase = 1;
    $(firstPhrase).addClass('translate-y-100');
    $(firstPhrase).removeClass('will-be-active-y');
    // $(firstPhrase).css('transform', 'translateY(100%)')
    $(firstPhrase).addClass('is-active-y');
  }
}

function openNav() {
  function linksUp() {
    const mainLinks = document.querySelectorAll('.nav-main-links-inner ul li a div p');

    mainLinks.forEach(function (mainLinks, index) {
      const delay = index * 50;
      mainLinks.style.transitionDelay = delay + 500 + 'ms';
    });

    $(mainLinks).css('transform', 'translateY(0)');
  }

  $('.is-menu-toggle ').on('click', () => {
    const mainLinks = document.querySelectorAll('.nav-main-links-inner ul li a div p');

    if (
      $('.menu-nav-bcgd').hasClass('is-nav-closed') &&
      $('.nav-elements-container').hasClass('is-not-visible')
    ) {
      //Remove Delay for the menu-nav to scaleX(1) 1st
      $('.menu-nav-bcgd, .menu-nav-rest').css({
        'transition-delay': '0s'
      });
      $('.menu-nav-bcgd, .menu-nav-rest').addClass('is-nav-open');
      $('.nav-elements-container, ul.main-links').css({
        'transition-delay': '0.5s'
      });

      linksUp();

      // Add Delay for 1st scale X & then appear

      $('.aob-links, .sub-links-container, .nav-social-media').css({
        'transition-delay': '0.95s'
      });

      $(
        '.nav-elements-container, ul.main-links, .aob-links, .sub-links-container, .nav-social-media'
      ).removeClass('is-not-visible');

      // Remove background from header (for product template's)
      $('header').css('background-color', 'initial');
    } else if ($('.menu-nav-bcgd').hasClass('is-nav-closed')) {
      $('.menu-nav-bcgd, .menu-nav-rest').css({
        'transition-delay': '0.5s'
      });
      $('.menu-nav-bcgd, .menu-nav-rest').removeClass('is-nav-open');
      $('.nav-elements-container').css({
        'transition-delay': '0s'
      });
      $('.nav-elements-container').addClass('is-not-visible');

      $(mainLinks).css('transform', '');

      // Add background from header (for product template's)
      $('header').css('background-color', '');
      $('header').css('background-color', '');

    }
  });
}

function navBackgroundChange() {
  // Make all the home links into one const
  const navLinks = document.querySelectorAll('.nav-main-links-inner ul li a div p');

  const navBackgrounds = document.querySelectorAll('.home-link-bcgd');

  $(navLinks).mouseout(function () {
    $(navBackgrounds).css('opacity', '0');

    navLinks.forEach(function (navLinks, index) {
      const delay = index * 50;
      navLinks.style.transitionDelay = delay + 'ms';
    });

    // hay q poner esto para que cuando haces el hover no sea tan lento cada uno!
  });

  $('.home-link')
    .mouseover(function () {
      $('.for-home').css('opacity', '1');
    })
    .mouseout(function () {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.new-arrivals-link')
    .mouseover(function () {
      $('.for-new-arrivals').css('opacity', '1');
    })
    .mouseout(function () {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.earings-link')
    .mouseover(function () {
      $('.for-earings').css('opacity', '1');
    })
    .mouseout(function () {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.pendants-link')
    .mouseover(function () {
      $('.for-pendants').css('opacity', '1');
    })
    .mouseout(function () {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.bags-link')
    .mouseover(function () {
      $('.for-bags').css('opacity', '1');
    })
    .mouseout(function () {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.limited-release-link')
    .mouseover(function () {
      $('.for-limited-release').css('opacity', '1');
    })
    .mouseout(function () {
      $(navBackgrounds).css('opacity', '0');
    });
}

function headerBlack() {
  $(document).on("scroll", () => {

    const pixelsForHeader = $(document).scrollTop();

    if ($(window).width() < 414 && pixelsForHeader > 130) {
      $("header").css('background-color', '#000')
    } else if (pixelsForHeader == 0) {
      $("header").css('background-color', '')

    }
  })
}

function changeToBlack() {
  $(document).on('scroll', function () {
    // Make sure this runs only on home
    if ($(window).width() >= 768) {
      var waypoint = new Waypoint({
        element: document.getElementById('details-waypoint'),
        handler: function (direction) {
          const pixelsFromTop = $(document).scrollTop();
          const pixelsFromDetails = $('#details-waypoint').offset().top;


          if (direction === 'down' && pixelsFromTop - 100 > pixelsFromDetails) {
            // Fade to black
            $('.has-white-background').css('background-color', 'black');
            $('.detail-info p, .detail-name h1, .related-product-container a').css('color', "#b4965a");
            $('.details-summary-container').css('border', "1px solid #000");

          } else {
            // Fade to white
            $('.has-white-background').css('background-color', 'white')
            $('.detail-info p, .detail-name h1, .related-product-container a').css('color', "");
            $('.details-summary-container').css('border', "1px solid #b2b2b2");


          }
        }
      });
    } else if ($('.has-white-background').hasClass('is-fixed')) {
      $("body").css('background-color', '#fff');

    }
  });
}


function appearSummaryMobile() {

  $(document).on('scroll', () => {
    const pixelsFromTop = $(document).scrollTop();
    const pixelsFromSummary = $('.details-inner').offset().top;

    console.log(pixelsFromTop);
    console.log(pixelsFromSummary)

    if ($(window).width() < 768 && pixelsFromTop > pixelsFromSummary) {
      $('.details-summary-container').css('transform', 'translateY(-100%)')
    } else if ($(window).width() < 768 && pixelsFromTop < pixelsFromSummary) {
      $('.details-summary-container').css('transform', '')
    }
  })
}

$(document).ready(function () {
  animateBorders();
  setTimeout(appearVariants, 1000);
  setTimeout(animateProductLines, 1750);
  setTimeout(appearRest, 1750);

  setInterval(addBigContainer, 6000);
  setInterval(animateBigSlides, 6000);
  setInterval(animatePhrases, 6000);
  setInterval(animateSmallSlides, 6000);

  navBackgroundChange();
  openNav();
  headerBlack();
  changeToBlack();
  appearSummaryMobile();

  // For Rings animation

  $('div.product-img.is-rings.is-absolute')
    .mouseover(function () {
      $('.product-phi-circle span')
        .first()
        .addClass('span-is-bigger');

      $('.products-container img')
        .first()
        .css('opacity', '1');

      $('.products-container img')
        .first()
        .css({
          transform: 'scale(1)',
          opacity: '1',
          transition: 'scale 0.2s 0.4s, opacity 0.4s 0.2s cubic-bezier(0.95, 0.2, 0.2, 0.95)'
        });
    })
    .mouseout(function () {
      $('.product-phi-circle span')
        .first()
        .removeClass('span-is-bigger');
      $('.products-container img')
        .first()
        .css('transform', 'scale(0)');
      $('.products-container img')
        .first()
        .css({
          opacity: '0',
          transition: 'scale 0.4s 0s, opacity 0.4s 0.2s cubic-bezier(0.95, 0.2, 0.2, 0.95)'
        });
    });

  // for Earrings collections home

  $('div.product-img.is-earrings.is-absolute')
    .mouseover(function () {
      $('.product-phi-circle span')
        .eq(1)
        .addClass('span-is-bigger');
      // $('.products-container img')
      //   .eq(1)
      //   .css('transition-delay', '0.s');
      $('.products-container img')
        .eq(1)
        .css('transform', 'scale(1)');
      $('.products-container img')
        .eq(1)
        .css({
          opacity: '1',
          transition: 'scale 0.4s 0s, opacity 0.4s 0.2s cubic-bezier(0.95, 0.2, 0.2, 0.95)'
        });
      // $('.product-phi-circle span')
      //   .eq(1)
      //   .css('transition-delay', '0');
    })
    .mouseout(function () {
      // $('.product-phi-circle span')
      //   .eq(1)
      //   .css('transition-delay', '0.s');
      $('.product-phi-circle span')
        .eq(1)
        .removeClass('span-is-bigger');
      // $('.products-container img')
      //   .eq(1)
      //   .css('transition-delay', '0');
      $('.products-container img')
        .eq(1)
        .css('transform', 'scale(0)');
      $('.products-container img')
        .eq(1)
        .css({
          opacity: '0',
          transition: 'scale 0.4s 0s, opacity 0.4s 0.2s cubic-bezier(0.95, 0.2, 0.2, 0.95)'
        });
    });

  // for Pendants collections home

  $('div.product-img.is-pendants.is-absolute')
    .mouseover(function () {
      $('.product-phi-circle span')
        .eq(2)
        .addClass('span-is-bigger');
      // $('.products-container img')
      //   .eq(2)
      //   .css('transition-delay', '0.s');
      $('.products-container img')
        .eq(2)
        .css('transform', 'scale(1)');
      $('.products-container img')
        .eq(2)
        .css('opacity', '1');
      // $('.product-phi-circle span')
      //   .eq(2)
      //   .css('transition-delay', '0');
    })
    .mouseout(function () {
      // $('.product-phi-circle span')
      //   .eq(2)
      //   .css('transition-delay', '0.s');
      $('.product-phi-circle span')
        .eq(2)
        .removeClass('span-is-bigger');
      // $('.products-container img')
      //   .eq(2)
      //   .css('transition-delay', '0');
      $('.products-container img')
        .eq(2)
        .css('transform', 'scale(0)');
      $('.products-container img')
        .eq(2)
        .css('opacity', '0');
    });

  // for Limited collections home
  $('div.product-img.is-limited.is-absolute')
    .mouseover(function () {
      $('.product-phi-circle span')
        .eq(3)
        .addClass('span-is-bigger');
      // $('.products-container img')
      //   .eq(2)
      //   .css('transition-delay', '0.s');
      $('.products-container img')
        .eq(3)
        .css('transform', 'scale(1)');
      $('.products-container img')
        .eq(3)
        .css('opacity', '1');
      // $('.product-phi-circle span')
      //   .eq(2)
      //   .css('transition-delay', '0');
    })
    .mouseout(function () {
      // $('.product-phi-circle span')
      //   .eq(2)
      //   .css('transition-delay', '0.s');
      $('.product-phi-circle span')
        .eq(3)
        .removeClass('span-is-bigger');
      // $('.products-container img')
      //   .eq(2)
      //   .css('transition-delay', '0');
      $('.products-container img')
        .eq(3)
        .css('transform', 'scale(0)');
      $('.products-container img')
        .eq(3)
        .css('opacity', '0');
    });

  // End product hover img\

  windowWidth = $(window).width;

  // Desktop animations for prduct variant selection

  if ($(window).width() > 768) {
    const productLines = document.querySelectorAll('.separator-line');
    const productChosenLines = productLines[1];

    // From nothing selected to selected on Desktop

    $('.product-variants a').on('click', event => {
      var productClicked = $(event.target);
      $('.product-variants a').css('opacity', '0.4');
      $('.product-variants a:hover').css('opacity', '1');

      $(productClicked).css('opacity', '1');

      // make the .main-img-inner-scroll-inner overflow: scroll

      $('.main-img-inner-scroll-inner').css('overflow-y', 'scroll');

      //show the "scroll" at the bottom
      $('.scroll-img p').css('opacity', '1');

      //animate lines
      $(productChosenLines).css('transition-delay', '0.5s');
      $(productChosenLines).addClass('animate-left');

      //make space flex=1
      // make visible
      // add special transitions for the flex to ocurr before than the opacity

      $('div.product-chosen-container.has-opacity').css({
        opacity: '1',
        flex: '1',
        'pointer-events': 'initial',
        transition: 'flex 0.5s 0s, opacity 0.5s 1s cubic-bezier(0.95, 0.2, 0.2, 0.95)'
      });

      $('div.product-chosen-options').css('transition-delay', '1s');
      $('div.product-chosen-options').css('opacity', '1');

      //change the main img
      $('#featured-img').fadeOut(500);
      $('#featured-img')
        .delay(1000)
        .css({
          display: 'none',
          'max-width': '350px'
        })
        .attr('src', 'images/product-test-big@2x.png');
      $('#featured-img').fadeIn(500);

      //

      return false;
    });
  }
  // Mobile animations for product variant selection -- from nothing to  selected variant
  else {
    $('.product-variants a').on('click ', event => {
      var productClicked = $(event.target);
      $('.product-variants a').css('opacity', '0.4');
      // $('.product-variants a:hover').css('opacity', '1');

      $(productClicked).css('opacity', '1');

      // make the .main-img-inner-scroll-inner overflow: scroll

      $('.main-img-inner-scroll-inner').css('overflow-y', 'scroll');

      //show the "scroll" at the bottom
      $('.scroll-img p').css('opacity', '1');

      // show options
      $('#option-1, #option-2').fadeIn(500);
      $('.product-chosen-options a').css('opacity', '1');

      // change the main img
      $('#featured-img').fadeOut(500);
      $('#featured-img')
        .delay(1000)
        .css({
          display: 'none',
          'max-width': '280px'
        })
        .attr('src', 'images/product-test-big@2x.png');

      $('#featured-img').fadeIn(500);

      return false;
    });
  }

  //reverse the animations with Clear Selection
  // Desktop animations
  if ($(window).width() > 768) {
    $('.product-chosen-options a').on('click', () => {
      const productLines = document.querySelectorAll('.separator-line');
      const productChosenLines = productLines[1];

      //animate lines
      $(productChosenLines).css('transition-delay', '0.5s');
      $(productChosenLines).removeClass('animate-left');

      //make flex=1
      $('div.product-chosen-container.has-opacity').css({
        opacity: '0',
        flex: '0',
        'pointer-events': 'none',
        transition: 'flex 0.5s 1s, opacity 0.5s 0s cubic-bezier(0.95, 0.2, 0.2, 0.95)'
      });

      //Hide the "scroll" at the bottom
      $('.scroll-img p').css({
        'transition-delay': '0',
        opacity: '0'
      });

      // make the .main-img-inner-scroll-inner overflow: hidden
      $('.main-img-inner-scroll-inner').css('overflow-y', 'hidden');

      // remove opacity from product-variants a
      $('.product-variants a').css('opacity', '');

      //
      $('div.product-chosen-options').css('transition-delay', '1s');
      $('div.product-chosen-options').css('opacity', '1');

      //change the main img

      $('#featured-img').fadeOut(500);
      $('#featured-img')
        .delay(1000)
        .css({
          display: 'none',
          'max-width': '400px'
        })
        .attr({
          src: 'images/exo@2x.jpg'
        });

      $('#featured-img').fadeIn(500);
    });
  }

  //Mobile animations
  else {
    $('.product-chosen-options a').on('click', () => {
      // add the options & change opacity to the Clear Selection
      $('#option-1, #option-2').fadeOut(500);
      $('.product-chosen-options a').css('opacity', '0.4');

      //Change all opacity of variants to original
      $('.product-variants a').css('opacity', '0.4');

      //Hide the "scroll" at the bottom
      $('.scroll-img p').css({
        'transition-delay': '0',
        opacity: '0'
      });

      // make the .main-img-inner-scroll-inner overflow: hidden

      $('.main-img-inner-scroll-inner').css('overflow-y', 'hidden');

      // Revert Original img

      $('#featured-img').fadeOut(500);
      $('#featured-img')
        .delay(1000)
        .css({
          display: 'none',
          'max-width': '280px'
        })
        .attr({
          src: 'images/exo@2x.jpg'
        });
      $('#featured-img').fadeIn(500);

      return false;
    });
  }

  $('.sizes a').on('click', event => {
    var sizeClicked = $(event.target);

    //remove for all classes & reset
    $('.sizes a').removeClass('size-is-active');

    //make the op lower on those not selected
    $('.sizes a').css('opacity', '0.4');

    //make the active class get the is-active class
    $(sizeClicked).addClass('size-is-active');
  });

  //if ($('.home-bio').hasClass('is-relative')) for checking if it's home
  if ($('.home-bio').hasClass('is-relative')) {
    new TypeIt('#will-be-typed', {
      strings: 'Narratives of form, growth, transformation, extinction and fossilization',
      speed: 100,
      cursor: true,
      autoStart: false
    });
  }
});

$(document).on('scroll', () => {

  if ($('.home-bio').hasClass('is-relative')) {
    var pixels = $(document).scrollTop();

    var pixelsForBio = $(document).scrollTop() - $('.js-scroll-slow-2').offset().top;
    var pixelsForBioOK = pixelsForBio + 1300;

    if ($(window).width() < 1680) {
      pixelsForBioOK = pixelsForBio + 1800;
    } else {
      pixelsForBioOK = pixelsForBio + 2500;
    }

    $('.js-scroll-slow-2').css('top', pixelsForBioOK * -0.195);

  } else {}
});
