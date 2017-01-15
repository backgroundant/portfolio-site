
/* Custom Js (Jquery) */

jQuery(function($) { 'use strict';


    $(window).on('load', function() {


        // Preloader

        $('#preloader').delay(400).fadeOut('slow');


        // Isotop SetUp

        $('.portfolio-menu li').on('click', function(){
                $('.portfolio-menu li').removeClass('active-port');
                $(this).addClass('active-port');
            });

        var $container = $('#portfolio');
        $container.isotope({
          itemSelector: '.col-sm-4',
          layoutMode: 'fitRows'
        });
        
        $('#filters').on('click', 'a', function() {
          var filterValue = $(this).attr('data-filter');
          $container.isotope({ filter: filterValue });
          return false;
        });

    });


    $(document).ready(function() {

        // Display profile picture function
      
          $('#yuan1').hover (function () {
           $('#yuan2').css({
               'display':'inline'
           });
           $('#yuan1').css({
               'display':'none' 
           });
           $('#hand').css({
               'display':'none' 
           });
       });
        // Auto Height Home Page Size

        function screenheight() {
            var homePage = $('#main-header');

            homePage.css({
                'height': $(window).height() + 'px'
            });
            return false;
        }

        screenheight();
        $(window).resize(screenheight);


        // Navbar Auto Change

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('#navigation').removeClass('animated-header');           
            } else {
                $('#navigation').addClass('animated-header');            
            }
            return false;
        });


        // Typed Text

        $('#type').typed({
            stringsElement: $('#in-details'),
            typeSpeed: 50,
            backDelay: 500,
            loop: true,
            contentType: 'html',
            loopCount: false
        });


        // Fast Scroll

        $('a#fast-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });


        // WOW Js

        new WOW( {mobile: false} ).init(); 


        // Counter Up

        $('.countup').counterUp({
            delay: 10,
            time: 3000
        }); 


        // Magnific Popup

        $('.magni').magnificPopup({
            type:'image',
            gallery:{enabled:true},
            zoom:{enabled: true, duration: 350},
            titleSrc: 'title'
        });        

     });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////