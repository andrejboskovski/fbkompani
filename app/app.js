


// navbar changing color

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-div");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});




