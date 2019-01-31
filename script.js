var originalNavTop;


$(document).ready(function(){

    originalNavTop = $('nav').offset().top;

    //top nav buttons
    $('#nav-links > div').on('click', function(){
        var id = $(this).attr('id');
        console.log(id);

        

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

    $('.title-name').on('click', function(){
        $('.example').css('display','inline');
        $('.active').removeClass('active');
        //$('#align').slideToggle();
    })

    $('#contact-nav ').on('click', function(){
        
        $(this).addClass('active');

        

        $('html, body').animate({scrollTop: $("#about").offset().top}, 2000);

        //$('#align').slideToggle();
    })


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

