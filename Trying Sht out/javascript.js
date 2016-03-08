$(".dot").css("background-color", "yellow")

$(".dot").each(function() {
    var newTop = Math.floor(Math.random()*($(window).height()-100)) + "px";
    var newLeft = Math.floor(Math.random()*($(window).width()-100)) + "px";
    console.log(newTop,newLeft);
    $(this).css("top",newTop);
    $(this).css("left",newLeft);
});
    
$(window).resize(function() {
    spreadDots();

});

spreadDots();

or

function spreadDots() {
    $(".dot").each(function() {
    var newTop = Math.floor(Math.random()*($(window).height()-100)) + "px";
    var newLeft = Math.floor(Math.random()*($(window).width()-100)) + "px";
    console.log(newTop,newLeft);
    $(this).css("top",newTop);
    $(this).css("left",newLeft);
});
    