
$(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var inputNum = $("input#inputNum").val();
    console.log(inputNum);

    // $(".person1").text(person1Input);

    $("#result").show();
  });
});
