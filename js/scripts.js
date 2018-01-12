$(document).ready(function() {
  $("form#cat-quiz").submit(function(event) {
    var name = $("#name").val();
    //$(".result").append("<p>Great job, "+name+". You got...</p>");
    $("#spaceship").show();

    event.preventDefault();
  });

});
