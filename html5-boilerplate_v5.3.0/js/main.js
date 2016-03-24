$("p").html("Some new value..");

console.log("hi");

$("button").click(function() {
    console.log("You clicked it..");
    $("body").css("background-color", "lime");
    
});

$(window).scroll(function() {
    console.log("You are scrolling..");
    console.log(event);
});