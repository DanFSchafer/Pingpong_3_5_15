
$(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();

    var inputNum = parseInt($("input#inputNum").val());

//create array of integers from 1 to input
    var numbers = [];
    for (var index=1; index < inputNum + 1; index +=1) {
      numbers.push(index);
    }

    //replace array elements evenly divisible by 15 with "pingpong"
    //replace array elements evenly divisible by 3 with "ping"
    //replace array elements evenly divisible by 5 with "pong"
    var pongNumbers = numbers.map(function(number) {
      if (number % 15 === 0) {
        return "pingpong";
      } else if (number % 3 === 0) {
        return "ping";
      } else if (number % 5 === 0) {
        return "pong";
      } else {
        return number;
      }
    });

//delete existing list for multiple submissions
    $("#result").hide();
    $("#theList").text("");

//display resulting array elements as an unordered list
    pongNumbers.forEach(function(pongNumber) {
      $("#theList").append("<li>" + pongNumber + "</li>");
    });
    $("body").css("background-image","url('img/pingpong1.png')");
    $("#result").fadeIn();
  });
});
