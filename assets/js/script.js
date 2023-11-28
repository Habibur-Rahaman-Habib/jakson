(function ($) {

    /*
        1. Data Background Function
        2. Scroll top button
        3. Offcanvus toggle
        4. Theme Slider Functions
        5. Pricing Range Slider
        6. Nice Select
        7. Checkout Toggle
        8. Header Sticky
        9. Mobile Menu
        10. Header Search 
        11. Preloader
        12. Fancybox
        13. Countdown
        14. Cart Drawer
        15. Wow Js
    */


    // //1. Data Background Set
    // $('[data-background]').each(function () {
    //     $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    // });

    //2. Scroll top button
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



    //8. Header Sticky
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();

        if (scrollBar > 150) {
            $(".header-sticky").addClass("sticky-on");
        } else {
            $(".header-sticky").removeClass("sticky-on");
        }
    });


    //11. Preloader
    // $(window).on("load", function () {
    //     $(".preloader").fadeOut();
    // });

    // index 1 testimonial slider
    $(".testi_wrap").slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
    });


    //12. Fancybox
    Fancybox.bind("[data-fancybox]", {});



    //13. Countdown
    $(".countdown-timer").each(function () {
        var $data_date = $(this).data('date');
        $(this).countdown({
            date: $data_date
        });
    });

    //15. wow js
    new WOW().init();

    // counter UP
    $(document).ready(function () {
        $('.count').counterUp({
            delay: 10,
            time: 5000
        });
    });

    //filter
    var $gird = $('.portfolio_item_active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
    });

    $('.portfolio_button').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $gird.isotope({ filter: filterValue });
        $grid.isotope({ filter: '.transition' });
    });

    $(".portfolio_button button").each(function () {
        $(this).on("click", function () {
            $(this).parents(".portfolio_button").find("button.active").removeClass("active");
            $(this).addClass("active");
        });
    });



})(jQuery)

