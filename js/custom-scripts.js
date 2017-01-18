$(document).ready(function () {

    if ($(window).width() < '981'){

        $('.sign-block').appendTo('nav');

    } else {

        $('.sign-block').appendTo('header-top');

    }

    $(window).resize(function(){

        if ($(window).width() < '981'){

            $('.sign-block').appendTo('nav');

        } else {

            $('.sign-block').appendTo('.header-top');

        }

    });

    $('.fa-bars').click(function() {

        $('nav').addClass('active');

    });

    $('.icon-close').click(function() {

        $('nav').removeClass('active');

    });

});