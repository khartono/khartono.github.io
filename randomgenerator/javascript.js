var text = ["Is a fairytale, they say","He was made of snow but the children know","How he came to life one day","Was a jolly happy soul","With a corncob pipe and a button nose",
"And two eyes made out of coal"];

for (var t = 0; t < 80; t++) {
    $(".main").append("<div class='snow'></div>");
    $(".main").append("<div class='flake'></div>");
};

$(".mybutton").click(function() {
    $(".snow").each(function() {
        var randtop = Math.floor(Math.random() * $(window).height()) + "px";
        var randleft = Math.floor(Math.random() * $(window).width()) + "px";
        $(this).css("top", randtop);
        $(this).css("left", randleft);
    });
    
    $(".flake").each(function() {
        var randtop = Math.floor(Math.random() * $(window).height()) + "px";
        var randleft = Math.floor(Math.random() * $(window).width()) + "px";
        $(this).css("top", randtop);
        $(this).css("left", randleft);
    });
    
    var newtext = text[Math.floor(Math.random()*text.length)];
    $(".mytext").append(newtext);
});
    
    