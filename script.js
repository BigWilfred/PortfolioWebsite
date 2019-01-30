


$(document).ready(function(){

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


})

