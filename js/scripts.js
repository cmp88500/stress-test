$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var warningTotal = 0;
    var stressTotal = 0;
    var reliefTotal = 0;

    $("input:checkbox[name=input-name1]:checked").each(function() {
      var checkboxMade = $(this).val();
      $("#response").append(checkboxMade + "<br/>");
      warningTotal += 1;
    });
    $("input:checkbox[name=input-name2]:checked").each(function() {
      var checkboxMade = $(this).val();
      $("#response").append(checkboxMade + "<br/>");
      stressTotal += 1;
    });
    $("input:checkbox[name=input-name3]:checked").each(function() {
      var checkboxMade = $(this).val();
      $("#response").append(checkboxMade + "<br/>");
      reliefTotal += 1;
    });
    console.log(warningTotal);
    $("#response").show();
    $("#formOne").hide();


if ((warningTotal >= 6  || stressTotal >= 6) && reliefTotal<6) {
  $("#response").append("You have high stress and are not managing your symptoms. Please consider these resources:");
} else if ((warningTotal >=6 || stressTotal >= 6) && reliefTotal>= 6) {
  $("#response").append("You have high stress but are managing your symptoms well.");
} else {
  $("#response").append("You have low stress.");
}

  });
});
