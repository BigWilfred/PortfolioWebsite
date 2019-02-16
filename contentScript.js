

$(window).on('scroll', function(){
    

    sortNav();
})

$(document).ready(function(){
    //scrolls back up to the top of the screen
    $('#top-button').on('click', function(){
        $('html, body').animate({scrollTop: $('body').offset().top}, 1000);
    })
    sortNav();
})

function sortNav(){
    var alignTop = parseInt($('#align').offset().top );
    var windowTop = $(window).scrollTop();
    if(windowTop >= alignTop){
        //$('#top-button').animate({opacity:1}, 300);background-color: rgb(248, 248, 248);box-shadow: rgba(33, 33, 33, 0.2) 0px 0px 5px 0px;
        $('#top-button').css('opacity','1');
        if($(window).width() <= 905){
            $('#back-home').css('top','0').css('position','fixed').css('background-color','rgb(248, 248, 248)').css('box-shadow','rgba(33, 33, 33, 0.2) 0px 0px 5px 0px');
            $('#back-home').slideDown();
        }else{
            $('#back-home').css('top','0').css('position','fixed').css('display','inline');
        }
        
    }
    else{
        $('#top-button').css('opacity','0');
        if($(window).width() <= 905){
            $('#back-home').css('top','unset').css('position','absolute').css('background-color','unset').css('box-shadow','none').css('display','none');
        }
        else{
            $('#back-home').css('display','none').css('top','unset').css('position','absolute').css('background-color','unset').css('box-shadow','none');
        }
        
    }
}