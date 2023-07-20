// Variables used

var saveBtn = document.querySelector(".saveBtn");
var time = document.querySelector(".time-block");
var currentDate = document.querySelector("#currentDay");
var hour = document.querySelector("#hour");
var note = document.querySelector(".description");

// Tracks the date under the title

var today = dayjs();
$('#currentDay').text(today.format('MM/DD/YYYY'));


var timeNow = today.format('HH');



// Tracks the hours - is it past present or future? The color changes based on that. For the cell color to change the page must be refreshed.

function timeTracker() {
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            if (timeNow > blockTime) {
                $(this).addClass("past");
            }
            else if (blockTime == timeNow) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        })
};

timeTracker();
    console.log(timeNow);


// Save button for the notes, it commits it to local storage on a refresh the notes remain.

function save(event) {
    var note = this.parentNode.id;
    var notation = this.previousElementSibling.value;
   localStorage.setItem(note, notation);
   console.log(notation);
};


// This code allows each save button of every hour to work.

$(".saveBtn").each(function () { $(this).on("click", save) } )

// Saves notes to each individual hour.
    
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));




