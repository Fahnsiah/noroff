$(document).ready(function () {
  $("#btnChangeBackground").click(function () {
    // $("#pcontent").css("background-color", "red");
    $("#pcontent").addClass("p-bg");
  });

  $("#btnRefresh").click(function () {
    $("#pcontent").removeClass("p-bg");
    $("#pcontent").addClass("default-bg");
  });
});
