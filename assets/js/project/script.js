
// $("#home").css({ 'height': ($(window).height() ) + 'px' });//Fix fullscreen slider height
// $("#home-half").css({ 'height': ($(window).height()/2) + 'px' });//Fix fullscreen slider height
// $(".full-screen-img").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen image height
// $(".full-screen-video").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen video height
// $(".pattern-overlay").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen pattern overlay height

$(document).ready(function () {
 
/*-----------------------------------------------------------------------------------*/
/*	Go Back  Top Button
/*-----------------------------------------------------------------------------------*/


    $("#go-back-top").hide();
   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#go-back-top').fadeIn();
        } else {
            $('#go-back-top').fadeOut();
        }
    });
});


window.onload = function () {
/*-----------------------------------------------------------------------------------*/
/*	PreLoader
/*-----------------------------------------------------------------------------------*/
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
 /*End PreLoader*/
}
