


$(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    $("#result").hide();

    var inputNum = parseInt($("input#inputNum").val());
//  console.log(inputNum);

//create array of numbers
    var arrays1 = [];
    for (var index=1; index < inputNum + 1; index +=1) {
      arrays1.push(index);
    }
//  console.log(arrays1);

//replace array elements evenly divisible by 15 with "pingpong"
//replace array elements evenly divisible by 3 with "ping"
//replace array elements evenly divisible by 5 with "pong"
    var arrays2 = arrays1.map(function(array1) {
      if (array1 % 15 === 0) {
        return "pingpong";
      } else if (array1 % 3 === 0) {
        return "ping";
      } else if (array1 % 5 === 0) {
        return "pong";
      } else {
        return array1;
      }
    });

// console.log(arrays2);

//delete existing list
    $("#theList").text("");

//display array as an unordered list
    arrays2.forEach(function(array2) {
      $("#theList").append("<li>" + array2 + "</li>");
    });

    $("#result").show();
  });
});
