// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. Shorthand for $(document).ready(function () {})
$(function () {
  var hourSection = [
    "#hour-1",
    "#hour-2",
    "#hour-3",
    "#hour-4",
    "#hour-5",
    "#hour-6",
    "#hour-7",
    "#hour-8",
    "#hour-9",
    "#hour-10",
    "#hour-11",
    "#hour-12",
    "#hour-13",
    "#hour-14",
    "#hour-15",
    "#hour-16",
    "#hour-17",
    "#hour-18",
    "#hour-19",
    "#hour-20",
    "#hour-21",
    "#hour-22",
    "#hour-23",
    "#hour-24",
  ];
  var currentHour = dayjs().hour();

  timeInterval = setInterval(function () {
    var today = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a");
    $(".today").text(today);
  }, 1000);

  for (let i = 0; i < hourSection.length; i++) {
    var hourSectionNum = hourSection.indexOf("#hour-" + [i]) + 1;
    console.log(hourSectionNum);

    if (currentHour === hourSectionNum) {
      $(hourSection[i]).addClass("present");
    } else if (currentHour > hourSectionNum) {
      $(hourSection[i]).addClass("past");
    } else if (currentHour < hourSectionNum) {
      $(hourSection[i]).addClass("future");
    } else {
      console.log("Congratulations! You broke time!!");
    }
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
