var myBooks = ["atls1.jpg", "atls2.jpg", "atls3.jpg", "atls4.jpg", "atls5.jpg", "atls6.jpg", "atls7.jpg", "atls8.jpg"];

$(".mybutton").click(function() {
    console.log("clicked");
    var newimg = "<img src='covers/ATLS/" + myBooks[Math.floor(Math.random() * myBooks.length)] +  "'>";
    $(".container").prepend(newimg);
    
})