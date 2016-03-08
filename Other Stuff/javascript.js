var text = ["Is a fairytale, they say","He was made of snow but the children know","How he came to life one day","Was a jolly happy soul","With a corncob pipe and a button nose",
"And two eyes made out of coal"];

document.getElementById("main").innerHTML = text;

var currenttext = false;

for (var t = 0; t < 80; t++) {
    $("body").append("<div class='snow'></div>");
    $("body").append("<div class='flake'></div>");
};

$(".mybutton").click(function() {
     
    $(".snow").each(function() {
    var randtop = Math.floor(Math.random() * 3000) + "px";
    var randleft = Math.floor(Math.random() * 3000) + "px";
    
    $(this).css("top", randtop);
    $(this).css("left", randleft);
  
});

$(".mybutton").click(function() {
     
    $(".flake").each(function() {
    var randtop = Math.floor(Math.random() * 3000) + "px";
    var randleft = Math.floor(Math.random() * 3000) + "px";
    
    $(this).css("top", randtop);
    $(this).css("left", randleft);
  
});


var randomtext = text[Math.floor(Math.random()*text.length)];

    while (randomtext == currenttext) {
        randomtext = text[Math.floor(Math.random()*text.length)];
    }
    
  
    currenttext = randomtext;
    
    