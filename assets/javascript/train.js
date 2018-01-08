// Clock
Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var milli = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
// End of Clock

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNksDk64_EDLqbzbzKdAnnTqIW4sW_niE",
    authDomain: "train-firebase-d8505.firebaseapp.com",
    databaseURL: "https://train-firebase-d8505.firebaseio.com",
    projectId: "train-firebase-d8505",
    storageBucket: "",
    messagingSenderId: "1040464824477"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

  // // Initial Values
  // var time = "";
  // var trainNames = "";
  // var arrivalTime = "";
  // var minutesArrivalTime = trainNames + time; 

  // // Initial load and subsequent value changes, get snapshot of the stored data
  // // Update page in real-time when the firebase database changes

  // database.ref().on("value", function (snapshot){

  // })

  function makeTable(container, data) {
    var table = $("<table/>").addClass("ScheduleTable");
    $.each(data, function(rowIndex, r){
      var row = $("<tr/>");
      $.each(r, function(colIndex, c) {
        row.append($("<t" + (rowIndex == 0 ? "h" : "d") + ">").text(c));
      });
      table.append(row);
    });
    return container.append(table);
  }

  $(document).ready(function() {
    var data = [["Train Name", "Destination", "Frequency (min)", "Next Arrival", "Minutes Away"],
  ["Bakerloo", "Heathrow", "5", "00:00", "5 minutes"],
  ["Central", "Heathrow", "5", "00:00", "5 minutes"],
  ["Circle", "Heathrow", "5", "00:00", "5 minutes"],
  ["District", "Heathrow", "5", "00:00", "5 minutes"],
  ["Jubilee & City", "Heathrow", "5", "00:00", "5 minutes"],
  ["Metropolitan", "Heathrow", "5", "00:00", "5 minutes"],
  ["Northern", "Heathrow", "5", "00:00", "5 minutes"],
  ["Piccadilly", "Heathrow", "5", "00:00", "5 minutes"],
  ["Victoria", "Heathrow", "5", "00:00", "5 minutes"],
  ["Waterloo & City", "Heathrow", "5", "00:00", "5 minutes"]]
  var cityTable = makeTable($(document.body), data);
  
  });