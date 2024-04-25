

$(document).ready(function () {
    $('#main-menu>li#booking>a').click(function () {
        $('#container').toggleClass('hidden');

        return false;
    });



    $(window).scroll(function () {

        if ($(this).scrollTop() > 53) {
            $('#container').css('top', '0px');
            $('#header').stop().slideUp();
        }
        else {
            $('#container').css('top', '53px');
            $('#header').stop().slideDown(500);

        }
        return false;
    })


});
