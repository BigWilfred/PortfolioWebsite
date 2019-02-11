var originalNavTop;

var navHeight;

var alignTop;
var aboutTop;
var projectTop;
var contactTop;

var navStuck = false;

$(document).ready(function(){
    originalNavTop = parseInt($('nav').offset().top);
    navHeight = $('nav').height();
    calculateAllTop();


    //filter the projects by web/print
    $('#filter-grid > div').on('click', function(){
        
        //the class that needs to be FILTERED (the web button has print class etc)
        var filterType = $(this).attr('class');

        //if the clicked button is already selected 
        if($('.selected').length){
            //if this is the one that is selected
            if($(this).hasClass('selected')){
                $('.selected').removeClass('selected');
                $('.filtered').css('opacity','1');
            }
            //the other option is selected
            else{
                
                $('.example').css('opacity','1');
                $('.filtered').removeClass('filtered');
                $('.selected').removeClass('selected');
                $('.filtered').css('opacity','1');
                //user has clicked web and print is already selected
                if(filterType == 'print'){
                    console.log('ither is selected');
                    //remove the current filtered and selected
                    $('.filtered').removeClass('filtered');
                    $(this).addClass('selected');
                    $(' div.example.print').addClass('filtered').css('opacity','0.2');

                }

                else{
                    $('.filtered').removeClass('filtered');
                    $(this).addClass('selected');
                    $(' div.example.web').addClass('filtered').css('opacity','0.2');
                }
            }
        }
        else{
            $('.filtered').removeClass('filtered');
            $(this).addClass('selected');
            $(' div.example.'+filterType).addClass('filtered').css('opacity','0.2');
            
            
        }
        
        //$(' div.example.'+filterType).css('display','none');
        
       
    })


    $('#about-nav ').on('click', function(){
        //$('.example').css('display','inline');
        scrollWindow('#about');
    })

    $('#projects-nav').on('click', function(){
        //$('.example').css('display','inline');
        scrollWindow('#content-container');
    })

    $('#contact-nav').on('click', function(){
        //$('.example').css('display','inline');
        scrollWindow('#contact');
    })

    $('#back-home.home ').on('click', function(){
        $('.example').css('display','inline');
        scrollWindow('body');
    })

    //example link navigation
    $('#content-container .example > div').on('click', function(){

        //stops filtered links from being clicked.
        if(!$(this).parent().hasClass('filtered')){
            var targetLocation = $(this).attr('href');
            window.location.href = targetLocation;
        }
        
    })

    //controls what nav item is set to active and sticky nav
    $(window).on('scroll', function(){
        var windowTop = $(window).scrollTop();

        calculateAllTop();

        if(windowTop < aboutTop-navHeight- 4){
            $('.active').removeClass('active');
            
        }
        else if(windowTop >= alignTop- navHeight -4 && windowTop < projectTop - navHeight){
            $('.active').removeClass('active');
            $('#about-nav').addClass('active');
        }
        else if(windowTop >= projectTop - navHeight && windowTop < contactTop - navHeight){
            $('.active').removeClass('active');
            $('#projects-nav').addClass('active');
        }
        else if(windowTop >= contactTop - navHeight){
            //will be used when site map is added
            $('.active').removeClass('active');
            $('#contact-nav').addClass('active');
        }

        console.log('window Top = '+ windowTop);
        console.log('alignTop- navHeight Top = '+ (alignTop- navHeight));


        //ghetto sticky
        if(windowTop >= alignTop- navHeight){

            //$('#align').css('padding-top',navHeight);
            //$('#back-home.home').css('display', 'inline').css('position', 'fixed');
            if(navStuck == false){
                console.log(navStuck);
                $('nav').css('display','none');

                $('nav').css('position', 'fixed').css('top', '0').css('justify-content','center').css('background-color', '#f8f8f8').css('color', '#212121');
                $('nav').slideDown(300);
                navStuck = true;
            }
            
            
        }
        else{
            $('nav').css('position', 'absolute').css('top', '2vw').css('color', '#f8f8f8').css('background-color', 'unset');
            $('nav').css('justify-content','end');
            navStuck = false;

            
            /*
            $('#align').css('padding-top','0');

            $('nav').css('position', 'static');
            $('#back-home.home').css('display', 'none').css('position', 'absolute');*/
        }
        
    })

})


$(window).on('resize', function(){
    originalNavTop = parseInt($('nav').offset().top);
    navHeight = $('nav').height();
    calculateAllTop();
})
function scrollWindow (target){

    $(':animated').stop();

    $('html, body').animate({scrollTop: $(target).offset().top - navHeight }, 1000);
}

function calculateAllTop(){

    

    alignTop = parseInt($('#align').offset().top );

    aboutTop = parseInt($('#about').offset().top );
    projectTop = parseInt($('#content-container').offset().top - navHeight);
    contactTop = parseInt($('#contact').offset().top );
   
}