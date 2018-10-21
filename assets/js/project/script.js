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
    $('#contato-left').fadeIn();
 /*End PreLoader*/
}

function telef(){
    document.getElementById("telefone").style.display = "block";
}
