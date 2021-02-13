$(function(){
    
    $('.burger__btn').on('click',function(){
        $(this).toggleClass('burger__btn--active'),
        $('.menu').toggleClass('menu--active')
    });

});