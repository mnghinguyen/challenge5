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

// Save hour values to localStorage
var setHours = function() {
    /* add tasks to localStorage */
    localStorage.setItem("hour", JSON.stringify(hour));
}

// Get hour values from localStorage
var getHour = function() {
    var loadHour = JASON.parse(localStorage.getItem("hour"));
    if (loadHour) {
        hour = loadHour
        $.each(hour, function(time, hour) {
            var timeDiv = $("#" + time);
            createTask(hour, timeDiv);
        })
    }
}
console.log(getHour);

// check applying css
var timeCheck = $(".timeCheck");
timeCheck.addClass("present");