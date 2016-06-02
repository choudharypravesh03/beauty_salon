( function( $ ) {

    // Setup variables
    $window = $(window);
    $slide = $('.homeSlide');
    $slideTall = $('.homeSlideTall');
    $slideTall2 = $('.homeSlideTall2');
    $body = $('body');

    //FadeIn all sections
    $body.imagesLoaded( function() {
        setTimeout(function() {

            // Resize sections
            adjustWindow();

            // Fade in sections
            $body.removeClass('loading').addClass('loaded');

        }, 800);
    });

    globalInit();

    function adjustWindow(){

        // Init Skrollr
        var s = skrollr.init({
            render: function(data) {

                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
            }
        });

        // Get window size
        winH = $window.height();

        // Keep minimum height 550
        if(winH <= 550) {
            winH = 550;
        }

        // Resize our slides
        $slide.height(winH);
        $slideTall.height(winH*2);
        $slideTall2.height(winH*3);

        // Refresh Skrollr after resizing our sections
        s.refresh($('.homeSlide'));

    }

    function globalInit() {
        //CAROUSEL FOR SERVICES
        var owlCarousel = $(".carousel-holder").owlCarousel({
            center: true,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout:2000,
            mouseDrag: true,
            touchDrag: true,
            slideBy: 1,
            startPosition: 1,
            dots: false,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            smartSpeed: 750,
            fluidSpeed: 750,
            addClassActive: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.left-arrow').on('click', function () {
            $(".carousel-holder").trigger('prev.owl.carousel');
        });

        $('.right-arrow').on('click', function () {
            $(".carousel-holder").trigger('next.owl.carousel');
        });
    }


} )( jQuery );