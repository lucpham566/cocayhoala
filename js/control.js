$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var obj = $("header.header-menu").offset().top;
    if (obj > 50) {
      $("header.header-menu").addClass("scroll");
      $(".addThis_listSharing").css({
        display:"block"
      })
    } else {
      $("header.header-menu").removeClass("scroll");
      $(".addThis_listSharing").css({
        display:"none"
      })
    }
  });
});

$(document).ready(function () {
  $(".carousel-banner").slick({
    infinite: true,
    dots: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".carousel-testimonier").slick({
    infinite: true,
    dots: false,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".carousel-special-products").slick({
    infinite: true,
    dots: false,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  });

  $(".carousel-gallery").slick({
    infinite: true,
    dots: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".tab-a").click(function () {
    $(".tab").removeClass("tab-active");
    $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active");
    $(".tab-a").removeClass("active-a");
    $(this).parent().find(".tab-a").addClass("active-a");
  });

  var isSearch = false;

  $("main").on("click", function () {
    isSearch = false;
    $("header .search .content").css({
      display: "none",
    });
  });
  $(".banner-top").on("click", function () {
    isSearch = false;
    $("header .search .content").css({
      display: "none",
    });
  });
  $("header .search .btn-sch").on("click", function () {
    isSearch = !isSearch;
    if (isSearch) {
      $("header .search .content").css({
        display: "block",
      });
    } else {
      $("header .search .content").css({
        display: "none",
      });
    }
  });
});
