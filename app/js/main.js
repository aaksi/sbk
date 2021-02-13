$(function(){
    
    $('.burger__btn').on('click',function(){
        $(this).toggleClass('burger__btn--active'),
        $('.menu').toggleClass('menu--active')
    });

    $('.catalog__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slider-btn slider-btn--left"></button>',
        nextArrow:'<button type="button" class="slider-btn slider-btn--right"></button>',
      });

    $('.gallery__small img').on('click', function(e){
        if($('.gallery__big img').attr('src')!== $(this).attr('src')){

            $('.gallery__big img').hide().attr('src', $(this).attr('src')).fadeIn(500);
        }


        e.preventDefault();
    });

    $('.catalog__card').hide();

    $('.furniture__item').on('click', function(){
        $('.catalog__card--furniture').slideToggle();
    });
    // $('.furniture__item2').on('click', function(){
    //     $('.catalog__card--furniture2').slideToggle();
    // });
    $('.table__item').on('click', function(){
        $('.catalog__card--table').slideToggle();
    });
    $('.mattresses__item').on('click', function(){
        $('.catalog__card--mattresses').slideToggle();
    });
    
    $('.catalog__card-btn--close').on('click', function(){
        $('.catalog__card').hide(500);
    });
    
    
});