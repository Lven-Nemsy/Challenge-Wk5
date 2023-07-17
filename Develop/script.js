// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.


//var past = document.querySelector(".past");
//var present = document.querySelector(".present");
//var future = document.querySelector(".future");
var saveBtn = document.querySelector(".saveBtn");
var time = document.querySelector(".time-block");
var currentDate = document.querySelector("#currentDay");
var hour = document.querySelector("#hour");
var note = document.querySelector(".description");


var today = dayjs();
$('#currentDay').text(today.format('MM/DD/YYYY'));

//var time = dayjs();
//$
    // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 






var timeNow = today.format('HH');
    


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



function save(event) {
    var note = this.parentElement.id;
    var notation = this.previousElementSibling.value;
   localStorage.setItem(note, JSON.stringify(notation));
   console.log(notation);
    
};

saveBtn.addEventListener("click", save);

//localStorage.getItem(note, JSON.parse(notation));
    
$("#hour-9 .description").val(localStorage.getItem("hour-9"));

//JSON.parse(localStorage.getItem(notation));



//HINT: What does `this` reference in the click listener function? 
  
//How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

  
// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 

//if (){}
  
//HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  
  
// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
  
//HINT: How can the id attribute of each time-block be used to do this?
  
 // TODO: Add code to display the current date in the header of the page.


