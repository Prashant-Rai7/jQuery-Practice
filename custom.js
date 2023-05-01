$(document).ready(function () {
  $("h1").click(function () {
    console.log("Hii, its working from external");
  });
});

$(function () {
  $("h2").click(function () {
    console.log("HEllo");
  });
});

$(function () {
  $("h2").click(function () {
    console.log("You ");
  });
});

console.log($);
console.log(jQuery);

$(document).ready(function () {
  $("div").click(function () {
    console.log("W");
    $("#p2").hide();
    $(".hello").hide();
  });

  $("p").dblclick(function () {
    $(this).hide();
    console.log("You double clicked", this);
  });

  // //   show the wiki
  //     $("#wiki").hide(1000, function () {
  //         console.log("Hideen");
  //     });

  // //   hide the wiki
  //     $("#wiki").show(2000, function () {
  //         console.log("visible");
  //     });

  // //   show the wiki
  // $("#wiki").fadeIn(1000, function () {
  //     console.log("Hideen");
  // });

  // //   hide the wiki
  //     $("#wiki").fadeOut(2000, function () {
  //         console.log("visible");
  //     });

  // //   fadetoggle the wiki
  // $("#wiki").fadeToggle(1000, function () {
  //     console.log("Hideen");
  // });

  //   hide the wiki
  //   $("#wiki").fadeTo("slow", 0.3);

  //   $("#wiki").click(function () {
  //     $(this).hide("slow");
  //   });

  //   $("div").fadeTo("slow", 0.5);

  //   $("div").fadeTo("slow", 1);

  //     $("#wiki").slideUp(2000);
  //     $("#wiki").slideDown(2000);
  //     $("#wiki").slideToggle(1000);
  $("#wiki").animate({ opacity: 0.3, height: "190px", width: "200px" }, 2000);
  //   $("#wiki").stop();
  $("#wiki").css("background-color", "purple");
});
