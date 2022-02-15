$(document).ready(function () {
  $(".enlace1").click(function () {
    var dondeEstamos = $(".dondeEstamos").offset();
    $("html, body").animate({ scrollTop: dondeEstamos.top - 100 }, 600);
  });
  $(".enlace2").click(function () {
    var loDifundimos = $(".loDifundimos").offset();
    $("html, body").animate({ scrollTop: loDifundimos.top - 100 }, 600);
  });
  $(".enlace3").click(function () {
    var otraEntrada = $(".otraEntrada").offset();
    $("html, body").animate({ scrollTop: otraEntrada.top - 100 }, 600);
  });
  $(".enlace4").click(function () {
    var otrasNovedades = $(".otrasNovedades").offset();
    $("html, body").animate({ scrollTop: otrasNovedades.top - 200 }, 600);
  });
  $(".enlace5").click(function () {
    var video = $(".video").offset();
    $("html, body").animate({ scrollTop: video.top - 200 }, 600);
  });
  $(".enlace6").click(function () {
    var audio = $(".audio").offset();
    $("html, body").animate({ scrollTop: audio.top - 200 }, 600);
  });
  $(".enlace7").click(function () {
    var activitat = $(".activitat").offset();
    $("html, body").animate({ scrollTop: activitat.top - 200 }, 600);
  });
  $(".enlace8").click(function () {
    var audios5 = $(".audios5").offset();
    $("html, body").animate({ scrollTop: audios5.top - 200 }, 600);
  });
  $(".barriba").css("display", "none");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".barriba").fadeIn("slow");
    } else {
      $(".barriba").fadeOut("slow");
    }
  });

  var x = true;
  $("#trigger").on("click", function (e) {
    e.preventDefault();
    if (x) {
      $("nav").stop().slideToggle("fast");
      x = false;
    } else {
      $("nav")
        .stop()
        .slideToggle("fast", function () {
          $("nav").css("display", "");
          x = true;
        });
    }
  });
});
