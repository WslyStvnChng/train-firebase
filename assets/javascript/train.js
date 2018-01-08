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

  // Capture Button Click

  $("#addTrainButton").on("click", function() {
    event.preventDefault();

    // Initial Values from DOM
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = $("#timeInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();

    // Verifying the on.click button works 
    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);

    // Creating object to hold train data
    var newTrain = { name: trainName, where: destination, whichTrain: firstTrain, howLong: frequency};
  });