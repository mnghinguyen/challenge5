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
    localStorage.setItem("hour", JSON.stringify(hour));
}

// time check applying css
function timeCheck() {
    // Get hour values from localStorage
    var currentHour = JASON.parse(localStorage.getItem("hour"));
    currentHour = moment().hour();
    $(".hour").each(function () {
        var elementHour = parseInt($(this).attr("id"));

        // handle past, present, and future
        if (elementHour < currentHour) {
            $(this).removeClass(["present", "future"]).addClass("past");
        }
        else if (elementHour === currentHour) {
            $(this).removeClass(["past", "future"]).addClass("present");
        }
        else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    });
}