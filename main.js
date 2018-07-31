$(document).ready(function() {
  function removePreloader() {
    $('.preloader-small').css('transform', 'scaleX(0)');
    $('.preloader-big').css('transform', 'scaleX(0)');

    $('.is-menu-toggle').fadeIn(300);
    $('.is-cart-toggle').css('display', 'flex');
  }

  setTimeout(removePreloader, 4000);
});

function pageTransition() {
  const aLinks = document.querySelectorAll('a');

  $(aLinks).on('click', function() {
    var href = $(this).attr('href');
    $('.preloader-small').css('transform', 'scaleX(1)');
    $('.preloader-big').css('transform', 'scaleX(1)');

    setTimeout(function() {
      window.location = href;
    }, 1000);
    return false;
  });
}

function animateBorders() {
  $('.is-first-border').toggleClass('animate-first-border');
  $('.is-second-border').toggleClass('animate-second-border');
}

function appearVariants() {
  const productVariants = document.querySelectorAll('.product-variants a');

  productVariants.forEach(function(productVariants, index) {
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

  everythingButLines.forEach(function(everythingButLines, index) {
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
  } else {
  }

  if ($(window).width() <= 768) {
    $('.is-second-border').css('transform', 'scaleX(1)');
  } else {
  }

  if ($(window).width() <= 414) {
    $('.is-first-border').css('transform', 'scaleX(1)');
  } else {
  }
}

function addBigContainer() {
  $('.big-slide-container').addClass('slider-animation-appear');
}

var currentCTA = 0;

function animateProductCTA() {
  const ctas = document.querySelectorAll('.cta-button');

  var cta = ctas[currentCTA];
  var nextCTA = ctas[currentCTA + 1];

  ctas.forEach(function(ctas, index) {
    $(cta).css('transform', 'translateY(-100%)');
    $(nextCTA).css('transform', 'translateY(100%)');
  });
}

// function animateBigSlides() {
//   const slides = document.querySelectorAll('#big-slide-img-container div');

//   var previousSlide = slides[currentSlide - 1];
//   var previousPreviousSlide = slides[currentSlide - 2];
//   var slide = slides[currentSlide];

//   var nextSlide = slides[currentSlide + 1];
//   var maxSlides = slides.length;
//   var lastSlide = $(slides).last();

//   currentSlide = currentSlide + 1;

//   slides.forEach(function (slides, index) {
//     $(slide).addClass('is-current-slide');
//     $(slide).removeClass('is-not-current');
//     $(lastSlide).removeClass('is-current-slide');
//     $(lastSlide).removeClass('will-be-current');

//     $(previousSlide).removeClass('is-not-current');
//     $(previousSlide).removeClass('will-be-current');
//     $(slide).addClass('slider-image-scale-appear');
//     $(nextSlide).addClass('slider-image-scale-reverse');
//     $(nextSlide).addClass('will-be-current');

//     // las clases se van sacando con previousSlide y slide, se deja el lastslide para el loop cuando vuelve a empezar. hay que sacarle el currentslide porque al loopear no entra en la categoría de previousSlide, entonces se hace una clase especial para este último elemento.
//   });

//   $(slide).removeClass('slider-image-scale-reverse');
//   $(slide).removeClass('slider-image-appear');
//   $(slide).removeClass('is-not-current-slide');
//   // $(previousSlide).addClass('is-not-current-slide');
//   $(previousSlide).removeClass('is-current-slide');

//   $(previousPreviousSlide).removeClass('slider-image-scale-appear');

//   if (currentSlide >= 4) {
//     $(slides).css('transform', 'translateY(0)');
//     currentSlide = 0;

//     // Add clases for first time
//     // Aca repite lo del principio MENOS lo del lastSlide, porque este actúa como el loop del último slide.
//     $(slide).addClass('is-current-slide');
//     $(slide).removeClass('is-not-current');

//     $(previousSlide).removeClass('is-not-current');
//     $(previousSlide).removeClass('will-be-current');
//     $(slide).addClass('slider-image-scale-appear');
//     $(nextSlide).addClass('slider-image-scale-reverse');
//     $(nextSlide).addClass('will-be-current');
//   }
// }

// function animateBigSlidesNew() {
//   const bigSlides = document.querySelectorAll('.big-slide-img-container-inner');

//   var previousBigSlide = bigSlides[currentSlide - 1];
//   var bigSlide = bigSlides[currentSlide];
//   var nextBigSlide = bigSlides[currentSlide + 1];
//   var firstBigSlide = $(bigSlides).first();
//   var lastBigSlide = $(bigSlides).last();

//   const images = document.querySelectorAll('.big-slide-img');
//   var nextImage = images[currentSlide + 1];

//   currentSlide = currentSlide + 1;

//   bigSlides.forEach(function (bigSlides, index) {
//     $(bigSlide).css('left', '100%');
//     $(nextImage).addClass('slider-image-scale-reverse');
//     $(bigSlides).css('transition', '');
//   });
// }

var currentSlide = 0;

function animateWidthSlides() {
  const bigSlides = Array.prototype.slice.call(document.querySelectorAll('.big-slide-img'));

  bigSlides.reverse();

  var bigSlide = bigSlides[currentSlide];
  var nextBigSlide = bigSlides[currentSlide + 1];

  var bigImages = Array.prototype.slice.call(document.querySelectorAll('.big-slide-content'));

  bigImages.reverse();
  var nextBigImage = bigImages[currentSlide + 1];

  bigSlides.forEach(function(bigSlides, index) {
    if ($(window).width() >= 414) {
      $(nextBigSlide).css('width', '100%');
      // $(nextBigImage).addClass('slider-image-scale-reverse');
    } else {
      bigSlides.style.transitionDelay = '';
      $(nextBigSlide).css('height', '100%');
      // $(nextBigImage).addClass('slider-image-scale-reverse');
    }
  });

  currentSlide = currentSlide + 1;

  if ($(window).width() >= 414 && currentSlide >= 4) {
    bigSlides.reverse();

    // bigSlides.forEach(function (bigSlides, index) {
    //   const delay = index * 120;
    //   bigSlides.style.transitionDelay = delay + 200 + 'ms';
    // })

    $(bigSlides).css('width', '');
    // $(bigImages).removeClass('slider-image-scale-reverse');

    currentSlide = 0;
  } else if ($(window).width() <= 414 && currentSlide >= 4) {
    bigSlides.reverse();

    // bigSlides.forEach(function (bigSlides, index) {
    //   const delay = index * 120;
    //   bigSlides.style.transitionDelay = delay + 200 + 'ms';
    // })

    $(bigSlides).css('height', '');
    // $(bigImages).removeClass('slider-image-scale-reverse');

    currentSlide = 0;
  }
}

function animateSmallSlidesLast() {
  cuurentSmallSlide = 0;

  const smallSlides = Array.prototype.slice.call(document.querySelectorAll('.small-slide-img'));

  smallSlides.reverse();

  var smallSlide = smallSlides[currentSmallSlide];

  //Se pone una class en las img para poder seleccionarlas
  const images = Array.prototype.slice.call(document.querySelectorAll('.small-slide-content'));

  images.reverse();
  var nextImage = images[currentSmallSlide + 1];

  smallSlides.forEach(function(smallSlides, index) {
    if ($(window).width() >= 414) {
      $(smallSlide).css('width', '0%');
      // $(nextImage).addClass('slider-image-scale-reverse')
    } else {
      smallSlides.style.transitionDelay = '';
      $(smallSlide).css('height', '0%');
      // $(nextImage).addClass('slider-image-scale-reverse')
    }
  });

  currentSmallSlide = currentSmallSlide + 1;

  if ($(window).width() >= 414 && currentSmallSlide >= 4) {
    smallSlides.reverse();

    // smallSlides.forEach(function (smallSlides, index) {
    //   const delay = index * 120;
    //   smallSlides.style.transitionDelay = delay + 200 + 'ms';
    // })

    $(smallSlides).css('width', '');
    $(images).removeClass('slider-image-scale-reverse');

    currentSmallSlide = 0;
  } else if ($(window).width() <= 414 && currentSmallSlide >= 4) {
    smallSlides.reverse();

    // smallSlides.forEach(function (smallSlides, index) {
    //   const delay = index * 120;
    //   smallSlides.style.transitionDelay = delay + 200 + 'ms';
    // })

    $(smallSlides).css('height', '');
    $(images).removeClass('slider-image-scale-reverse');

    currentSmallSlide = 0;
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

  smallSlides.forEach(function(smallSlides, index) {
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

  phrases.forEach(function(phrases, index) {
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

    mainLinks.forEach(function(mainLinks, index) {
      const delay = index * 50;
      mainLinks.style.transitionDelay = delay + 500 + 'ms';
    });

    $(mainLinks).css('transform', 'translateY(0)');
  }

  $('.is-menu-toggle ').on('click', () => {
    const mainLinks = document.querySelectorAll('.nav-main-links-inner ul li a div p');

    $('.bag-container').css('z-index', '89');
    $('.menu-nav').css('z-index', '90');

    if (
      $('.menu-nav-bcgd').hasClass('is-nav-closed') &&
      $('.nav-elements-container').hasClass('is-not-visible') &&
      $(window).width() < 414
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
    }
    // for desktop do  remove the background-color
    else if (
      $('.menu-nav-bcgd').hasClass('is-nav-closed') &&
      $('.nav-elements-container').hasClass('is-not-visible')
    ) {
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
    }
    // Mobile for closed animations
    else if ($('.menu-nav-bcgd').hasClass('is-nav-closed') && $(window).width() < 414) {
      $('.menu-nav-bcgd, .menu-nav-rest').css({
        'transition-delay': '0.5s'
      });
      $('.menu-nav-bcgd, .menu-nav-rest').removeClass('is-nav-open');
      $('.nav-elements-container').css({
        'transition-delay': '0s'
      });
      $('.nav-elements-container').addClass('is-not-visible');

      $(mainLinks).css('transform', '');
    }

    // Desktop animation & setting the header to initial
    else if ($('.menu-nav-bcgd').hasClass('is-nav-closed')) {
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

  $(navLinks).mouseout(function() {
    $(navBackgrounds).css('opacity', '0');

    navLinks.forEach(function(navLinks, index) {
      const delay = index * 50;
      navLinks.style.transitionDelay = delay + 'ms';
    });

    // hay q poner esto para que cuando haces el hover no sea tan lento cada uno!
  });

  $('.home-link')
    .mouseover(function() {
      $('.for-home').css('opacity', '1');
    })
    .mouseout(function() {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.new-arrivals-link')
    .mouseover(function() {
      $('.for-new-arrivals').css('opacity', '1');
    })
    .mouseout(function() {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.earings-link')
    .mouseover(function() {
      $('.for-earings').css('opacity', '1');
    })
    .mouseout(function() {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.pendants-link')
    .mouseover(function() {
      $('.for-pendants').css('opacity', '1');
    })
    .mouseout(function() {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.bags-link')
    .mouseover(function() {
      $('.for-bags').css('opacity', '1');
    })
    .mouseout(function() {
      $(navBackgrounds).css('opacity', '0');
    });

  $('.limited-release-link')
    .mouseover(function() {
      $('.for-limited-release').css('opacity', '1');
    })
    .mouseout(function() {
      $(navBackgrounds).css('opacity', '0');
    });
}

function headerBlack() {
  $(document).on('scroll', () => {
    const pixelsForHeader = $(document).scrollTop();
    if ($('header').hasClass('no-background-really')) {
      $('header').css('background-color', '');
    } else if (pixelsForHeader > 1) {
      $('header').css('background-color', '#000');
    } else if (pixelsForHeader == 0) {
      $('header').css('background-color', '');
    }
  });
}

function changeToBlack() {
  $(document).on('scroll', function() {
    // Make sure this runs only on home
    if ($(window).width() >= 768) {
      var waypoint = new Waypoint({
        element: document.getElementById('details-waypoint'),
        handler: function(direction) {
          const pixelsFromTop = $(document).scrollTop();
          const pixelsFromDetails = $('#details-waypoint').offset().top;

          if (direction === 'down' && pixelsFromTop - 100 > pixelsFromDetails) {
            // Fade to black
            $('.has-white-background').css('background-color', 'black');
            $('.detail-info p, .detail-name h1, .related-product-container a').css(
              'color',
              '#b4965a'
            );
            $('.details-summary-container').css('border', '1px solid #000');
          } else {
            // Fade to white
            $('.has-white-background').css('background-color', 'white');
            $('.detail-info p, .detail-name h1, .related-product-container a').css('color', '');
            $('.details-summary-container').css('border', '1px solid #b2b2b2');
          }
        }
      });
    } else if ($('.has-white-background').hasClass('is-fixed')) {
      $('body').css('background-color', '#fff');
    }
  });
}

function collectionsHover() {
  $('div.product-img.is-rings.is-absolute')
    .mouseover(function() {
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
    .mouseout(function() {
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
    .mouseover(function() {
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
    .mouseout(function() {
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
    .mouseover(function() {
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
    .mouseout(function() {
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
    .mouseover(function() {
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
    .mouseout(function() {
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
}

function openProductChosen() {
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
      
      // fill product chosen container with selected product data
      $('.product-variants a').removeClass('selected');
      $(productClicked).addClass('selected');
      fillProductChosen();

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
        });
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
      
      // fill product chosen container with selected product data
      $('.product-variants a').removeClass('selected');
      $(productClicked).addClass('selected');
      fillProductChosen();
      // make the .main-img-inner-scroll-inner overflow: scroll

      $('.main-img-inner-scroll-inner').css('overflow', 'scroll');

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
        });
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

      // remove selected attriubte class from all products
      $('.product-variants a').removeClass('selected');

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

      // remove selected attriubte class from all products
      $('.product-variants a').removeClass('selected');

      //Hide the "scroll" at the bottom
      $('.scroll-img p').css({
        'transition-delay': '0',
        opacity: '0'
      });

      // make the .main-img-inner-scroll-inner overflow: hidden

      $('.main-img-inner-scroll-inner').css('overflow', 'hidden');

      // Revert Original img

      $('#featured-img').fadeOut(500);
      $('#featured-img')
        .delay(1000)
        .css({
          display: 'none',
          'max-width': '280px'
        })
        .attr({
          src: 'images/radix-xray@2x.png'
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
}

// function hideLogo() {

//   let prevScroll = 0

//   $(document).on('scroll', () => {

//     const currentScroll = $(document).scrollTop()

//     if (currentScroll > prevScroll && $('.home-bio').hasClass('is-relative') && $(window).width() >= 768) {
//       $('#Path_5, #Path_6, #Path_7, #Path_8, #Path_9').fadeOut(500)
//     } else {
//       $('#Path_5, #Path_6, #Path_7, #Path_8, #Path_9').fadeIn(500)

//     }

//     prevScroll = currentScroll

//   })
// };

function appearSummaryMobile() {
  if ($(window).width() < 768 && $('.product-info-container').hasClass('flex')) {
    $(document).on('scroll', () => {
      const pixelsFromTop = $(document).scrollTop();
      const pixelsFromSummary = $('.details-inner').offset().top;

      console.log(pixelsFromTop);
      console.log(pixelsFromSummary);

      if (pixelsFromTop > pixelsFromSummary) {
        $('.details-summary-container').css('transform', 'translateY(-100%)');
      } else if ($(window).width() < 768 && pixelsFromTop < pixelsFromSummary) {
        $('.details-summary-container').css('transform', 'translateY(100%)');
      }
    });
  }
}

function openCart() {
  const detailsAOB = document.querySelectorAll(
    '#cart-product-option-1, #cart-product-option-2, #cart-product-size, #cart-product-qty, #cart-product-price'
  );

  const bagCTA = document.querySelectorAll('.bag-cta-total, .checkout');

  $(detailsAOB).css('transition-delay', '0.5s');

  $('.is-cart-toggle').on('click', function() {
    $('.bag-container').toggleClass('bag-container-open');
    $('.bag-inner').toggleClass('bag-inner-open');
    $('.bag-rest').toggleClass('bag-rest-open');
    $('.bag-product-image').toggleClass('bag-product-image-open');
    $('.bag-product-info-name').toggleClass('bag-product-info-name-open');
    $('.bag-product-info-details').toggleClass('bag-product-info-details-open');
    $(detailsAOB).toggleClass('bag-product-info-details-children-open');
    $(bagCTA).toggleClass('bag-cta-open');
    $('.menu-nav').css('z-index', '89');
    $('.bag-container').css('z-index', '90');

    if ($('.bag-container').hasClass('bag-container-open')) {
      detailsAOB.forEach(function(detailsAOB, index) {
        const delay = index * 50;
        detailsAOB.style.transitionDelay = delay + 1100 + 'ms';
      });
      $(bagCTA).css('transition-delay', '1.6s');
      // bagCTA.forEach(function (bagCTA, index) {
      //   const delay = index * 150;
      //   bagCTA.style.transitionDelay = delay + 1600 + 'ms';
      // });
    } else {
      $(detailsAOB).css('transition-delay', '');
      $(bagCTA).css('transition-delay', '');
    }

    if ($('.bag-inner').hasClass('bag-inner-open') && $(window).width() <= 414) {
      $('.cart-info').css('opacity', '1');
    } else if ($('.bag-inner').hasClass('bag-inner-open')) {
      $('.cart-info').css('opacity', '1');
    } else {
      $('.cart-info').css('opacity', '');
    }
  });
}

function changeVideos() {
  $(document).ready(function() {
    if ($(window).width() < 768) {
      $('.video-container')
        .first()
        .html('<img class="mobile-gif"src="images/specimens-video-gif.gif">');
      $('.video-container')
        .last()
        .html('<img class="mobile-gif"src="images/nature-as-imagined-gif.gif">');
    }
  });
}

// function inView() {
//   inView('.section')
//     .on('enter', section => {
//       section.classList.add('in-viewport')
//     })
//     .on('exit', section => {
//       // section.classList.remove('in-viewport')
//     })

//   inView.threshold(0.2)
// }

$(document).ready(function() {
  animateBorders();
  setTimeout(appearVariants, 1000);
  setTimeout(animateProductLines, 1750);
  setTimeout(appearRest, 1750);

  setInterval(animatePhrases, 6000);
  // setInterval(animateSmallSlides, 6000);
  setInterval(animateWidthSlides, 6000);
  // setInterval(animateProductCTA, 6000);
  setInterval(animateSmallSlidesLast, 6000);

  navBackgroundChange();
  openNav();
  headerBlack();
  // changeToBlack();
  appearSummaryMobile();
  collectionsHover();
  openProductChosen();
  // hideLogo();
  openCart();
  changeVideos();

  // For Rings animation

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
  if ($('.home-bio').hasClass('is-relative') && $(window).width() > 414) {
    var pixels = $(document).scrollTop();

    var pixelsForBio = $(document).scrollTop() - $('.js-scroll-slow-2').offset().top;
    var pixelsForBioOK = pixelsForBio + 1300;

    if ($(window).width() < 1680) {
      pixelsForBioOK = pixelsForBio + 1800;
    } else {
      pixelsForBioOK = pixelsForBio + 2500;
    }

    $('.js-scroll-slow-2').css('top', pixelsForBioOK * -0.195);
  } else {
  }
});
