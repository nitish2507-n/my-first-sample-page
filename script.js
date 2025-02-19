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
$(document).ready(function(){
    $(".feature-box").hover(function(){
        $(this).css("box-shadow", "0 8px 20px rgba(255, 255, 255, 0.4)");
    }, function(){
        $(this).css("box-shadow", "0 4px 10px rgba(255, 255, 255, 0.2)");
    });
});
