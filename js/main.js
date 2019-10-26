$(document).ready(function() {
    $('.nav-button').click(function() {
      $('.nav-button').toggleClass('burger');
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 200){
            $('.navbar').addClass('nav-on-scroll');
        }else{
            $('.navbar').removeClass('nav-on-scroll');
        }
    })
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 650){
            $('.camera-img').addClass('anim-from-left');
            $('.mission-text').addClass('anim-from-right');
        }else{
            $('.camera-img').removeClass('anim-from-left');
            $('.mission-text').removeClass('anim-from-right');
        }
    });
    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');
        if(value === 'all'){
            $('.filter').show(300);
        }else{
            $('.filter').not(`.${value}`).hide(300);
            $('.filter').filter(`.${value}`).show(300);
        }
    });
    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item');
        $(this).siblings().removeClass('active-item')
    });
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 4300) {
          $('.card-1').addClass('moveFromLeft');
          $('.card-2').addClass('moveFromBottom');
          $('.card-3').addClass('moveFromRight');
        } else {
          $('.card-1').removeClass('moveFromLeft');
          $('.card-2').removeClass('moveFromBottom');
          $('.card-3').removeClass('moveFromRight');
        }
      });
});