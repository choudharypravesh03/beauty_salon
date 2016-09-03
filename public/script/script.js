$(document).ready(function() {
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
            autoplay: false,
            autoplayTimeout:2000,
            mouseDrag: true,
            touchDrag: true,
            slideBy: 1,
            startPosition: 1,
            dots: false,/*
             animateIn: "fadeIn",
             animateOut: "fadeOut",*/
            smartSpeed: 750,
            fluidSpeed: 750,
            addClassActive: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.left-arrow').on('click', function () {
            $(".carousel-holder").trigger('prev.owl.carousel');
        });

        $('.right-arrow').on('click', function () {
            $(".carousel-holder").trigger('next.owl.carousel');
        });




        /*TESTIMONIALS CAROUSEL*/

        var owlCarousel = $("#testimonial-carousel").owlCarousel({
            center: true,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout:7000,
            mouseDrag: true,
            touchDrag: true,
            slideBy: 1,
            startPosition: 1,
            dots: true,
            smartSpeed: 750,
            fluidSpeed: 750,
            addClassActive: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


        var $grid = $('.grid').imagesLoaded( function() {
            $grid.masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer',
                gutter: 10
            });
        });

        window.initMap = function() {
            var myLatLng = {lat: 23.193300, lng: 77.467363};

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Touch & Shine Beauty Parlour'
            });
        }


        //Detect scroll position
        $(window).scroll(function(){
            var y = $(window).scrollTop();
            if(y == 0) {
                $("#navigation").css({"background-color":"transparent", "color":"#ffffff", "box-shadow":"none"});
            } else if(y > 200) {
                $("#navigation").css({"background-color":"#ffffff", "color":"#333333", "box-shadow": "1px 1px 1px 1px rgba(0,0,0,0.12)"});
            }
        });

        $('.scroll-to-anchor').click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });

    }
})
