// // Welcome text
// $(window).scroll(function () {
//   var fromtop = $(document).scrollTop();
//   $(".welcomeText h1").css({ opacity: 320 - fromtop });
// });

// $(window).scroll(function () {
//   var fromtop = $(document).scrollTop();
//   $(".welcomeText h3").css({ opacity: 390 - fromtop });
// });

// $(window).scroll(function () {
//   var fromtop = $(document).scrollTop();
//   $(".mouse").css({ opacity: 390 - fromtop });
// });

// // About Header fade
// $(window).scroll(function () {
//   var fromtop = $(document).scrollTop();
//   $(".about-header").css({ opacity: 1000 - fromtop });
// });

// // Projects Header Fade
// $(window).scroll(function () {
//   var fromtop = $(document).scrollTop();
//   $(".projects-header").css({ opacity: 2050 - fromtop });
// });

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("nav").css("background", "black");
    } else {
      $("nav").css("background", "transparent");
    }
  });
});
