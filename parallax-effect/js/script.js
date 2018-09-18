$(function(){
    $(window).on('scroll', function(){
        parallax();
    });

    function parallax (){
        var scroll = $(window).scrollTop();
        $('.pic1').css('background-position', 'center '+ scroll * 0.75 + 'px');
    };
});