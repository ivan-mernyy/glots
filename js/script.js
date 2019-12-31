$(document).ready(function() {
    $('.reviews__carousel').slick({
       prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"</button>',
       nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"</button>'
      });

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });
    
    $('.mod__close').on('click', function() {
        $('.overlay, #order, #more').fadeOut('slow');
    });

    $('[data-modal=more]').each(function(i) {
        $(this).on('click', function() {
            $('#more .question__title').text($('.price__title').eq(i).text());
            $('.overlay, #more').fadeIn('slow');
        });
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #order').fadeOut();

            $('form').trigger('reset');
        });
        return false;
    });
});
