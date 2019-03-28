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
    checkSpanOverflow();

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
                $('.filtered').removeClass('filtered');    
            }
            //the other option is selected
            else{
                
                $('.example').css('opacity','1');
                $('.filtered').removeClass('filtered');
                $('.selected').removeClass('selected');
                $('.filtered').css('opacity','1');
                //user has clicked web and print is already selected
                if(filterType == 'print'){
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
    })


    $('#about-nav ').on('click', function(){
        scrollWindow('#align');
    })

    $('#projects-nav').on('click', function(){
        scrollWindow('#content-container');
    })

    $('#contact-nav').on('click', function(){
        scrollWindow('#contact');
    })

    $('#back-home.home ').on('click', function(){
        $('.example').css('display','inline');
        scrollWindow('body');
    })

    //example link navigation
    $('#content-container .example >div div').on('click', function(){

        //stops filtered links from being clicked.
        if(!$(this).parent().hasClass('filtered')){
            var targetLocation = $(this).attr('href');
            window.location.href = targetLocation;
        }
        
    })

    //scrolls back up to the top of the screen
    $('#top-button').on('click', function(){
        $('html, body').animate({scrollTop: $('body').offset().top}, 1000);
    })

    //toggles the email
    $('.email-toggle').on('click', function(){
        $('#contact-container h3').slideToggle();
    });

    //controls what nav item is set to active and sticky nav
    $(window).on('scroll', function(){
        var windowTop = $(window).scrollTop();

        calculateAllTop();

        if(windowTop < alignTop-navHeight){
            $('.active').removeClass('active');
            
        }
        else if(windowTop >= - navHeight  && windowTop < projectTop - navHeight){
            $('.active').removeClass('active');
            $('#about-nav').addClass('active');
        }
        else if(windowTop >= projectTop - navHeight && windowTop < contactTop - navHeight -4){
            $('.active').removeClass('active');
            $('#projects-nav').addClass('active');
        }
        else if(windowTop >= contactTop - navHeight - 4){
            //will be used when site map is added
            $('.active').removeClass('active');
            $('#contact-nav').addClass('active');
        }

        //ghetto sticky
        if(windowTop >= alignTop- navHeight){
            if(navStuck == false){
                $('nav').css('display','none');
                $('nav').css('position', 'fixed').css('top', '0').css('justify-content','center').css('background-color', '#f8f8f8').css('color', '#212121').css('box-shadow', '0px 0px 5px 0px rgba(33,33,33,0.2)');
                $('nav').slideDown(300);
                $('#top-button').animate({opacity:1}, 300);
                navStuck = true;
            }    
        }
        else{
            $('nav').css('position', 'absolute').css('top', '2vw').css('color', 'white').css('background-color', 'unset').css('box-shadow', 'none');
            //mobile break point
            if($(window).width() <= 905){
                $('nav').css('justify-content','center');
            }
            else{
                $('nav').css('justify-content','flex-end');
            }
            $('#top-button').css('opacity','0');
            navStuck = false;
        }
    })

    //opacity of the background image content-grid
    $('#content-container #content-grid .example > div ').mouseenter(function(){
        if($(window).width() > 905){
            if(!$(this).parent().hasClass('filtered')){
                $(this).children('.exampleBackgroundImage').animate({opacity:1}, 300);
                $(this).children('a').css('opacity','0');
            }
        }
    })
    $('#content-container #content-grid .example > div').mouseleave(function(){
        if($(window).width() > 905){
            $(this).children('.exampleBackgroundImage').animate({opacity:0}, 300);
            $(this).children('a').css('opacity','1');
        }
    })
})


$(window).on('resize', function(){
    //resets all the backgound-images to visible if been hovered
    if($(window).width() <= 905){
        $('.example > div img').each(function(){
            if($(this).css('opacity') == 0){
                $(this).css('opacity', 0.8);
            }
        })
    }
    else{
        $('.example > div img').each(function(){
            $(this).css('opacity', 0);
        })
    }
    originalNavTop = parseInt($('nav').offset().top);
    navHeight = $('nav').height();
    calculateAllTop();
    checkSpanOverflow();  
})

//scrolls window to the top of the target selector
function scrollWindow (target){
    $(':animated').stop();
    $('html, body').animate({scrollTop: $(target).offset().top - navHeight +1}, 1000);
}

//calculate the top position of each section
function calculateAllTop(){
    alignTop = parseInt($('#align').offset().top );
    aboutTop = parseInt($('#about').offset().top );
    projectTop = parseInt($('#content-container').offset().top - navHeight);
    contactTop = parseInt($('#contact').offset().top );
}

//determines if example subtext has gone beyond the container
//if true -> hides container 
function checkSpanOverflow(){
    var spanBot = calculateBot('div.example div a span:first-of-type');
    var aBot = calculateBot('div.example div a:first-of-type');
    if($(window).width() > 905){
        if(spanBot >= aBot - 20){
            $('html body div#align div#content-container div#content-grid div.example div a span').css('visibility', 'hidden');
        }
        else{
            $('html body div#align div#content-container div#content-grid div.example div a span').css('visibility', 'visible');
        }
    }
    else{
        $('html body div#align div#content-container div#content-grid div.example div a span').css('visibility', 'visible');
    }
}

function calculateBot(selector){
    return $(selector).offset().top + $(selector).outerHeight();
}