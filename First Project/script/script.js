$('.vacancy_items > div') .on('click', function(){
    $(this).children('.vacancy_items-icon').toggleClass('vacancy_items-icon__rotate');
    $(this).parent('.vacancy_items').toggleClass('change-color')
    $(this).next('.vacancy_items-text').slideToggle(300);
})

$('.features_items > div') .on('click', function(){
    $(this).children('.features_item-text').slideToggle(300);
    $(this).children('.features_item-title') .toggleClass('features_change-color');
    $(this).toggleClass('features_change-border')
})