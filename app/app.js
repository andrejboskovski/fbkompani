


// navbar changing color on scroll

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-whole");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// Toggle menu opening

$(".toggle-icon").click(function(){
  $(".toggle").addClass("toggle-click");
  });

$(".toggle-icon-inside").click(function(){
  $(".toggle").removeClass("toggle-click");
  });





