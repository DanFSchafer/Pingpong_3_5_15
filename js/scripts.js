
var arrays1 = [];

$(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var inputNum = parseInt($("input#inputNum").val());
    console.log(inputNum);

//create array of numbers
    for (var index=1; index < inputNum + 1; index +=1) {
      arrays1.push(index);
    }
    console.log(arrays1);

//list array of numbers as a unordered list
    arrays1.forEach(function(array1) {
      $("#theList").append("<li>" + array1 + "</li>");
    });


    $("#result").show();
  });
});
