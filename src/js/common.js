define(["jquery"], function($) {

 // Scroll LINK
    
$('a[href^="#"].scroll').click(function() {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 500,
        easing: "swing"
    });
    return false;
});

// Scroll BAR

$(window).scroll(function() {
    // calculate the percentage the user has scrolled down the page
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

    $('.bar-long').css('width', scrollPercent + "%"); 
    
    // INCLUD CLASS bar-long

});   
    

// Pixel PREFECT MODUL

//    $(document).ready(function() {
//                $('body').each(function() {
//                    var body = $(this);
//                    var img_url = $(this).data('img');
//                    var img = new Image();
//                    img.src = img_url;
//                    img.onload = function() {
//                        var ppbox = '<div id="images__back" style="background: url(' + img_url + ') no-repeat 50% 0%;top:0;width:100%;position:absolute;z-index:1000;opacity:.9;height:' + img.height + 'px"></div>';
//                        body.append(ppbox);
//                    };
//                }); 
//
//        $('html').click(function() {
//            $('#images__back').toggleClass('front__end');
//        });
//    });
     
// Pixel PREFECT MODUL
    

    
    
// END Slick Slider   
    
    
// NAMBER EVENT

var $gallery = $('.slider__block__11');
var slideCount = null;  // ZERO FEIL INFORMATION
    
    $gallery.on('init', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $('.slide-count-wrap').find('.total'); // INCLUD CLASS *.total *
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.slide-count-wrap').find('.current'); // INCLUD CLASS *.current*
  $el.text(currentSlide + 1);
}
    
    

// END NAMBER EVENT

$('.slider__footer__next').click(function() { $elewenarrow.slick('slickNext'); });
 
$('.slider__footer__prev').click(function() { $elewenarrow.slick('slickPrev'); });
    
    $elewenarrow = $('.slider__footer').slick({

//        nextArrow: '<i class="next-arrow ion-arrow-right-c uslide-arrow"></i>',
//        prevArrow: '<i class="prev-arrow ion-arrow-left-c uslide-arrow"></i>',
        
        prevArrow: '.slider__footer__prev',
        nextArrow: '.slider__footer__next',
        arrows: false,


        fade: false,
        dots: false,
        arrows: false,
//        autoplaySpeed: 1500,
//        autoplay: true,
        infinite: true,

        slidesToShow: 5,
        slidesToScroll: 1,


        responsive: [{
            breakpoint: 2145,
            settings: {
                vertical: false,
              
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 1945,
            settings: {
                vertical: false,
              
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 1745,
            settings: {
                vertical: false,
              
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 1445,
            settings: {
                vertical: false,
              
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 1200,
            settings: {
                vertical: false,
       
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 950,
            settings: {
                vertical: false,
       
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 650,
            settings: {
                vertical: false,
          
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]

    });
    
    
// END Slick Slider
    
    
    
    $('.prise__slider').slick({


    autoHover: false,
    autoControls: false,

            fade: false,
            dots: false,
            arrows: false,
            autoplaySpeed: 1500,
            autoplay: true,


            slidesToShow: 1,
            slidesToScroll: 1,

          speed: 1250,
              fade: true,
              cssEase: 'linear',

    }); 
    
    
 
});








    $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00'
    }
});


