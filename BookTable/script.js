$(".years").click(function() {
    console.log("clicked");
    $(".years").addClass($(".selection-2"))
    
})

var myBooks = ["atls1.jpg", "atls2.jpg", "atls3.jpg", "atls4.jpg", "atls5.jpg", "atls6.jpg", "atls7.jpg", "atls8.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "CWO1.jpg", "CWO2.jpg"];

$(".mybutton").click(function() {
    console.log("clicked");
    var newimg = "<img src='covers/ATLS/" + myBooks[Math.floor(Math.random() * myBooks.length)] +  "'>";
    $(".container").prepend(newimg);
    
})