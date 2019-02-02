var originalNavTop;

var navHeight;
var aboutTop;
var projectTop;
var contactTop;

var stuck = false;

$(document).ready(function(){
    originalNavTop = parseInt($('nav').offset().top);
    calculateAllTop();

    /*top nav buttons
    $('#graphics-nav, #web-nav').on('click', function(){
        var id = $(this).attr('id');

        scrollWindow('#content-container');

        if($(this).hasClass('active')){
            $('.example').css('display','inline');
            //$(this).removeClass('active');
        }

        else{
            /*if any of the navs have active class remove underline
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

            //$(this).addClass('active');
        }

        
        
    })*/

    $('#about-nav ').on('click', function(){
        //$(this).addClass('active');
        $('.example').css('display','inline');
        scrollWindow('#about');
    })

    $('#projects-nav').on('click', function(){
        //$(this).addClass('active');
        $('.example').css('display','inline');
        scrollWindow('#content-container');
    })

    $('#back-home.home ').on('click', function(){
        //$('.active').removeClass('active');
        $('.example').css('display','inline');
        scrollWindow('body');
    })

    //example link navigation
    $('#content-container .example > div').on('click', function(){
        var targetLocation = $(this).attr('href');
        window.location.href = targetLocation;
    })

    
    $(window).on('scroll', function(){
        var windowTop = $(window).scrollTop();

        calculateAllTop();

        if(windowTop < aboutTop-4){
            $('.active').removeClass('active');
        }
        else if(windowTop >= aboutTop -4 && windowTop < projectTop){
            $('.active').removeClass('active');
            $('#about-nav').addClass('active');
        }
        else if(windowTop >= projectTop && windowTop < contactTop){
            $('.active').removeClass('active');
            $('#projects-nav').addClass('active');
        }
        else if(windowTop >= contactTop){
            //will be used when site map is added
        }


        //ghetto sticky
        if(windowTop >= originalNavTop){
            console.log('sticky');
            stuck = true;

            $('#align').css('padding-top',navHeight);

            $('nav').css('position', 'fixed').css('top', '0');
            $('#back-home.home').css('display', 'inline').css('position', 'fixed');
        }
        else{
            console.log('UNsticky');
            stuck = false;

            $('#align').css('padding-top','0');

            $('nav').css('position', 'static');
            $('#back-home.home').css('display', 'none').css('position', 'absolute');
        }
        
    })

})

function scrollWindow (target){

    $(':animated').stop();
    $('html, body').animate({scrollTop: $(target).offset().top - navHeight}, 1000);
}

function calculateAllTop(){

    navHeight = $('nav').height();

    
    aboutTop = parseInt($('#about').offset().top - navHeight);
    projectTop = parseInt($('#content-container').offset().top - navHeight);
    contactTop = parseInt($('#contact').offset().top - navHeight);

}