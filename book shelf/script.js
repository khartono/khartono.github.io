var container = document.querySelector('#masonry-grid');

$(function(){
 
    var $container = $('#masonry-grid');
  
    $container.imagesLoaded( function(){
      $container.masonry({
        itemSelector : '.grid-item'
      });
    });
  
});

var masonry = new masonry (container, {
  columnWidth: 50,
  itemSelector: '.grid-item'
});

$('.grid-item').masonry({
  columnWidth: 50,
  itemSelector: '.grid-item'
});




$('#masonry-grid').ready(function() {
  $('#grid-item').masonry({
   columnWidth: 320,
   itemSelector: '.grid-item'
  }).imagesLoaded(function() {
   $('#grid-item').masonry('reload');
  });
});