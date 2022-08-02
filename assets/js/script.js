var now = moment().format("MMM Do, YYYY");
$("#currentDay").text(now);

// set hour
var hour = {
    "9":[],
    "10":[],
    "11":[],
    "12":[],
    "13":[],
    "14":[],
    "15":[],
    "16":[],
    "17":[]
}


// check applying css
var timeCheck = $(".timeCheck");
timeCheck.addClass("present");