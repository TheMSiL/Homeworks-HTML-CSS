$(window).on('scroll', function(){
    if($(this).scrollTop() > 400){
        $('#up').fadeIn()
    }else{
        $('#up').fadeOut()
    }
})

$('#up') .on ('click', function(){
    $('html, body').animate({scrollTop: 0}, 400)
})


$('#news_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#news').offset().top}, 100)
})

$('#product_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#product').offset().top}, 100)
})

$('#collection_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#collection').offset().top}, 100)
})

$('#footer_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#footer').offset().top}, 100)
})