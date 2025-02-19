$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});
$(document).ready(function() {
    setTimeout(function() {
        $(".left-door, .right-door").addClass("door-open");
        setTimeout(function() {
            $(".door-overlay").fadeOut();
        }, 1500);
    }, 500);
});
