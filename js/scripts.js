$(document).ready(function() {
  $("form#cat-quiz").submit(function(event) {
    var name = $("#name").val();
    var snuggleInput = $("#snuggle").val();
    var energyInput = $("input:radio[name=energy]:checked").val();
    var foodInput = $("#food").val();
    $(".result").hide();
    $(".thanks").remove();
    $(".results").prepend("<p class='thanks'>Thanks, "+name+"! You got...")
    if (snuggleInput === "Yes" && energyInput !== "stoked" && foodInput === "Tuna") {
      $("#spaceship").show();
    } else if (snuggleInput !== "No" && energyInput !== "stoked" && (foodInput === "Potatoes" || foodInput === "Cheese" || foodInput === "Tuna")) {
      $("#agamemnon").show();
    } else if (snuggleInput === "Yes" && energyInput !== "stoked" && foodInput === "Peanut Donuts") {
      $("#gwen").show();
    } else if (snuggleInput !== "No" && energyInput === "stoked") {
      $("#tom-petty").show();
    } else {
      $("#none").show();
    }

      //gwen answers
      //tom petty answers
    event.preventDefault();
  });

});
