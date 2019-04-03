$(function (){
    
    var NH = $('.navbar').innerHeight();
    var UB = $('.upper-bar').innerHeight();
    
    $('.slider , .carousel-item').height($(window).height()- (NH + UB));  
   $(window).resize(function (){
        $(".slider").height($(window).height());
    });
    
            $('.collapse li a').click(function (){
                $('html , body').animate({
                    scrollTop : $($(this).data('value')).offset().top
                }, 2000);
            });
            
            $(window).scroll(function (){
                if ($(window).scrollTop() > 500){
                    $('.scrollBtn').fadeIn();
                }else{
                    $('.scrollBtn').hide();
                }
            });
            $('.scrollBtn').click(function (){
               
                $('html , body').animate({
                    scrollTop : 0
                } , 2000);
            });
            $('html').niceScroll({
     cursorcolor : '#08526d' ,
     cursorwidth : '15px',
     cursorborder : '1px solid #ec1c23'  
     
 });
    /* Featured Work */ 
    $('.featured-work ul li , .navbar-collapse ul li').on('click' , function (){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === '.all'){
            $('.shuffle .col-md').css('opacity' , 1);
        }else{
            $('.shuffle .col-md').css('opacity' , '.08');
            $($(this).data('class')).parent().css('opacity' , 1);
        }
            
    });
    
});


