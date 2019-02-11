

$(window).on('scroll', function(){
    var alignTop = parseInt($('#align').offset().top );
    var windowTop = $(window).scrollTop();

    if(windowTop >= alignTop){
        //$('#top-button').animate({opacity:1}, 300);
        $('#top-button').css('opacity','1');
    }
    else{
        console.log('bjmobj');
        $('#top-button').css('opacity','0');
    }
})