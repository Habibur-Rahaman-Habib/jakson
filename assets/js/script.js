(function ($) {

    /*
    1. Scroll top button
    2. Preloader
    3. page  slider
    4. Fancybox
    5. wow js
    6. counter UP
    7. filter
    8. Header Sticky
    9. scroll to bottom
    */


    //1. Scroll top button
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();
        if (scrollBar > 150) {
            $(".scroll-top-btn").fadeIn();
        } else {
            $(".scroll-top-btn").fadeOut();
        }
    })
    $(".scroll-top-btn").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        });
    });

    //2. Preloader
    setTimeout(() => {
        $('.preloader').fadeOut()
    }, 2500);

    // 3. page  slider
    /********* testimonial slider **************/
    $(".testi_wrap").slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
    });

    /********* blog page slider **************/
    $(".blog_img_slider").slick({
        slidesToShow: 1,
        asNavFor: ".blog_content_slider",
        arrows: true,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-arrow-left-long"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-arrow-right-long"></i></button>',
    });

    $(".blog_content_slider").slick({
        slidesToShow: 1,
        focusOnSelect: true,
        arrows: false,
        asNavFor: ".blog_img_slider",
    });

    /********* work slider **************/
    $('.work_slider').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    //brand slider
    $(".brand_slider").slick({
        slidesToShow: 5,
        autoplay: true,
        speed: 700,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                }
            }

        ]
    });


    //4. Fancybox
    Fancybox.bind("[data-fancybox]", {});


    //5. wow js
    new WOW().init();

    //6. counter UP
    $(document).ready(function () {
        $('.count').counterUp({
            delay: 10,
            time: 1500
        });
    });

    //7. filter
    var $gird = $('.portfolio_item_active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
    });

    $('.portfolio_button').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $gird.isotope({ filter: filterValue });
    });

    $(".portfolio_button button").each(function () {
        $(this).on("click", function () {
            $(this).parents(".portfolio_button").find("button.active").removeClass("active");
            $(this).addClass("active");
        });
    });

    $('.portfolio_button2').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $gird.isotope({ filter: filterValue });
        $grid.isotope({ filter: '.transition' });
    });

    $(".portfolio_button2 button").each(function () {
        $(this).on("click", function () {
            $(this).parents(".portfolio_button2").find("button.active").removeClass("active");
            $(this).addClass("active");
        });
    });

    //8. Header Sticky
    $(window).scroll(function () {

        if ($(window).scrollTop() > 200) {
            $('.header').addClass('fixed_menu');
        } else {
            $('.header').removeClass('fixed_menu');
        }
    });

    //9. scroll to bottom
    document.querySelector('.scroll-down-arrow').addEventListener('click', function () {
        document.querySelector('#section2').scrollIntoView({
            behavior: 'smooth'
        });
    });

})(jQuery)

