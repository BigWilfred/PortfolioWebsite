var originalNavTop;

var navHeight;
var aboutTop;
var projectTop;
var contactTop;


$(document).ready(function(){
    originalNavTop = parseInt($('nav').offset().top);
    calculateAllTop();

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
            $('.active').removeClass('active');
            $('#contact-nav').addClass('active');
        }


        //ghetto sticky
        if(windowTop >= originalNavTop){

            $('#align').css('padding-top',navHeight);

            $('nav').css('position', 'fixed').css('top', '0');
            $('#back-home.home').css('display', 'inline').css('position', 'fixed');
        }
        else{

            $('#align').css('padding-top','0');

            $('nav').css('position', 'static');
            $('#back-home.home').css('display', 'none').css('position', 'absolute');
        }
        
    })

})

function scrollWindow (target){

    $(':animated').stop();
    $('html, body').animate({scrollTop: $(target).offset().top - navHeight + 1}, 1000);
}

function calculateAllTop(){

    navHeight = $('nav').height();

    
    aboutTop = parseInt($('#about').offset().top - navHeight);
    projectTop = parseInt($('#content-container').offset().top - navHeight);
    contactTop = parseInt($('#contact').offset().top - navHeight);

}