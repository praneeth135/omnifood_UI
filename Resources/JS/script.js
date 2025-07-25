$(document).ready(function() {
    
    /* Sticky Navigation */
    $('.js--section-features').waypoint(function(direction) {
            if(direction === 'down'){
                
                $('nav').addClass('sticky');
                
            }   
            else{
                
                $('nav').removeClass('sticky');
                
            }                                                     
    }, {
        
        offset : '60px;'
        
    });
    
    /* Scroll on buttons */
    
    $('.js--scroll-to-plans').click(function () {
        
        $('html, body').animate({scrollTop : $('.js--section-plans').offset().top}, 1000);
        
    });
     $('.js--scroll-to-start').click(function () {
        
        $('html, body').animate({scrollTop : $('.js--section-features').offset().top}, 1000);
        
    });
    
    /*Navigation*/
    
    
    $(function() {
        
        $('a[href*=#]:not([href=#])').click(function(){
            if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if(target.length){
                    
                    $('html, body').animate({
                        
                        scrollTop : target.offset().top
                        
                    }, 1000);
                    return false;
                    
                }
                
            }
            
        });
        
    });
    
    /*Mobile-nav */
    
    $('.js--nav-icon').click(function () {
        
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(200);
        if(icon.hasClass('reorder-three-outline')) {
            
            icon.addClass('close-outline');
            icon.removeClass('reorder-three-outline');
            
            
        }else {
            
            icon.addClass('reorder-three-outline');
            icon.removeClass('close-outline');
            
        }
    })
    
});