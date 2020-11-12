$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var obj = $("header.header-menu").offset().top;
    console.log(obj);
    if (obj > 50) {
      $("header.header-menu").addClass("scroll");
    } else {
      $("header.header-menu").removeClass("scroll");
    }
  });
});

$(document).ready(function () {
  $(".carousel-banner").slick({
    infinite: true,
    dots:true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
  });

});

