// Navbar changing color on scroll

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-whole");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// Toggle menu opening

$(".toggle-icon").click(function () {
  $(".toggle").addClass("toggle-click");
});

$(".toggle-icon-inside").click(function () {
  $(".toggle").removeClass("toggle-click");
});


// Go to top button

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Go to top button end