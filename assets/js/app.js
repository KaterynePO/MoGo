$(function () {
  let header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOfset = $(window).scrollTop();

  //   Fixed Header
  checkScroll(scrollOfset);

  $(window).on("scroll", function () {
    scrollOfset = $(this).scrollTop();
    checkScroll(scrollOfset);
  });

  function checkScroll(scrollOfset) {
    if (scrollOfset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  //   Smooth scroll
  $("[data-scroll]").on("click", function (e) {
    e.preventDefault();

    let $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({ scrollTop: blockOffset }, 600);
  });

  //   Menu nav toggle
  $("#nav_toggle").on("click", function (e) {
    e.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  //   Collaps
  $("[data-collaps]").on("click", function (e) {
    e.preventDefault();

    let $this = $(this),
      blockId = $this.data("collaps");

    $this.toggleClass("active");
  });

  //   Slider

  $("[data-slider]").slick({
    infinite: true,
  });
});
