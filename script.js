var originalNavTop;


$(document).ready(function(){

    originalNavTop = $('nav').offset().top;

    //top nav buttons
    $('#graphics-nav, #web-nav').on('click', function(){
        var id = $(this).attr('id');
        console.log(id);

        scrollWindow('#content-container');

        if($(this).hasClass('active')){
            $('.example').css('display','inline');
            $(this).removeClass('active');
        }

        else{
            //if any of the navs have active class remove underline
            if($('.active').length){
                console.log('active exists');
                $('.active').removeClass('active');
            }

            if(id == 'web-nav'){
                $('.graphics').css('display','none');
                $('.web').css('display','inline');
            }

            else if(id == 'graphics-nav'){
                $('.graphics').css('display','inline');
                $('.web').css('display','none');
            }

            $(this).addClass('active');
        }

        
        
    })

    $('#contact-nav ').on('click', function(){
        $(this).addClass('active');
        $('.example').css('display','inline');
        scrollWindow('#about');
    })
    $('#projects-nav').on('click', function(){
        $(this).addClass('active');
        $('.example').css('display','inline');
        scrollWindow('#content-container');
    })

    $('#back-home.home ').on('click', function(){
        $('.active').removeClass('active');
        $('.example').css('display','inline');
        scrollWindow('body');
    })
    $('#content-container .example > div').on('click', function(){
        var targetLocation = $(this).attr('href');
        console.log(targetLocation);
        window.location.href = targetLocation;
    })

    //ghetto sticky
    $(window).on('scroll', function(){
        var windowTop = $(window).scrollTop();
        

        if(windowTop >= originalNavTop){
            console.log('stick');
            $('nav').css('position', 'fixed').css('top', '0');
            $('#back-home.home').css('display', 'inline').css('position', 'fixed');
        }
        else{
            $('nav').css('position', 'static');
            $('#back-home.home').css('display', 'none').css('position', 'absolute');
        }
        
    })

})

function scrollWindow (target){
    var navHeight = $('nav').height();

    $(':animated').stop();
    $('html, body').animate({scrollTop: $(target).offset().top - navHeight}, 1000);
    
}