$('.vacancy_items > div') .on('click', function(){
    $(this).children('.vacancy_items-icon').toggleClass('vacancy_items-icon__rotate');
    $(this).parent('.vacancy_items').toggleClass('change-color')
    $(this).next('.vacancy_items-text').slideToggle(300);
})