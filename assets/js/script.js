var now = moment().format("MMM Do, YYYY");
$("#currentDay").text(now);
// Change background
var hour = moment().format("a A");
$(".hour").text("9AM");

    function timeCheck() {
    $("#timeCheck").addClass("present");
    var timeCheck = moment().isBefore("HH");
    if (timeCheck === true){
        $("#timeCheck").addClass("past");} else if 
        (timeCheck === false) {
        $("#timeCheck").addClass("future");
        } else {
        return;
        }
}


