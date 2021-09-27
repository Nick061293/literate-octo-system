$(document).ready(function () {
  $("#btn-menu").click(function (e) {
    e.preventDefault();
    $("#menu").toggle("slow");
  });

  $("a").click(function (e) {
    e.preventDefault();

    var href = $(this).attr("href");

    if (href == "home") {
      $("#" + href).show();
      $("#about").hide();
      $("#action").hide();
      $("#contact").hide();
    } else if (href == "about") {
      $("#" + href).show();
      $("#home").hide();
      $("#action").hide();
      $("#contact").hide();
    } else if (href == "action") {
      $("#" + href).show();
      $("#home").hide();
      $("#about").hide();
      $("#contact").hide();
    } else if (href == "contact") {
      $("#" + href).show();
      $("#home").hide();
      $("#action").hide();
      $("#about").hide();
    }
  });
});
