$(function() {
    var toggle = false,
        toggling = false;
    $("#nav_menu_button_mobile").on('click', function() {
        if (!toggle) {
            toggling = true;
            $("#top_bar_nav").slideDown(450, function() {
                toggle = true;
                toggling = false;
            });
        } else {
            toggling = true;
            $("#top_bar_nav").slideUp(450, function() {
                toggle = false;
                toggling = false;
            });
        }
    });

    setInterval(function() {
        if ($(window).width() >= 706) {
            $("#top_bar_nav").css({display: 'block'});
        } else if (!toggle && !toggling) {
            $("#top_bar_nav").css({display: 'none'});
        }
    }, 250);
});