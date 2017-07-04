$(document).ready(function() {
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("original");
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });
  $("img").hover(function() {
    alert("This is Fifi");
  });
  $("p.space").click(function() {
    $("p.space").addClass("important");
  });
});
