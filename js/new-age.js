(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
        $('#mainNav').removeClass('navbar-click');
        if ($("#mainNav").offset().top < 100) {
            $("#mainNav img.logo").attr('src', 'img/happyorder-logo.svg');
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    $('.navbar-toggler').click(function() {
        if ($('#mainNav').hasClass('navbar-click')) {
            $('#mainNav').removeClass('navbar-click');
        } else {
            $("#mainNav").addClass('navbar-click');
        }
    })

    /*
    $('.sendlink').click(function() {
        if ($("#phone").intlTelInput("isValidNumber") && !$(this).hasClass('sent')) {
            $(this).html('<i class="fa fa-circle-o-notch loading"></i>');
            var sendToNumber = $("#phone").intlTelInput("getNumber");
            var tempthis = $(this);

            setTimeout(function() {
                $(tempthis).html('<i class="fa fa-check"></i> Skickat!'); //SUCCESS!!!
                $(tempthis).addClass('sent').removeClass('active');
                //$(tempthis).html('<i class="fa fa-exclamation"></i>'); //FAILED!!!
            }, 2000);


        }
    })
    */


    $('#phone').on('keyup', function() {
        if ($("#phone").intlTelInput("isValidNumber") && !$('.sendlink').hasClass('sent')) {
            $('.sendlink').addClass('active');
        } else {
            $('.sendlink').removeClass('active');
        }
    })


    // Collapse the navbar when page is scrolled and change logo src
    $(window).on('resize scroll load', function() {
        if ($("#mainNav").offset().top > 120) {
            $("#mainNav").addClass("navbar-shrink");
            $("img.logo-smile").parent().show();
            $("img.logo").parent().hide();
            //$("#mainNav img.logo").css('width', 100 - (100 / 1.7) + 'px');
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("img.logo-smile").parent().hide();
            $("img.logo").parent().show();
            if ($(window).width() > 992) {
                $("#mainNav").removeClass("navbar-click");
                $('.navbar-collapse').removeClass('show');
            }
            if ($(window).width() > 992) {
                var test = 120 - ($("#mainNav").offset().top / 1.7);
                //$("#mainNav img.logo").css('width', test + 'px');
            } else {
                //$("#mainNav img.logo").css('width', 100 - (100 / 1.7) + 'px');
            }
        }
    });




})(jQuery); // End of use strict