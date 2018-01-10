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

  var database = firebase.database();

  //will run on initial load and anytime data changes
  database.ref().on("child_added", function(snapshot){

    //Console.log to see if
    // console.log(snapshot.val());
    // console.log(snapshot.val().name);
    // console.log(snapshot.val().destination);
    // console.log(snapshot.val().firstTime);
    // console.log(snapshot.val().frequency);

    //

    //make variables to make it easy to grab information. Need first train and duration 
    var newwerFirstTime = (snapshot.val().firstTime);
    var newwerFrequency = (snapshot.val().frequency);
    var currentTime = moment();
    // console.log("Current Time: " + moment(currentTime).format("hh:mm"));
    var nextArrival;
    var minutesAway;

    // 
    var firstTimeConverted = moment(newwerFirstTime, "hh:mm").subtract(1, "years");
      console.log(firstTimeConverted);

    var tRemainder = firstTimeConverted % currentTime;
      console.log(tRemainder);

    var tMinutesTillTrain = newwerFrequency - tRemainder;
      console.log("Minutes Till Train: " + tMinutesTillTrain);

    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
      console.log("Arrival Time: " + nextTrain);

    //temprete literal to make the rows
    var newRow = `<tr>
        <td>${snapshot.val().name}</td>
        <td>${snapshot.val().destination}</td>
        <td>${snapshot.val().frequency}</td>
        <td>${nextTrain}</td>
        <td>${tMinutesTillTrain}</td>
    </tr>`;

    $("tbody").append(newRow);
  }, function(errorObject) {
    console.log("Whooops: " + errorObject.code);
});



  // when the user submit a train via the form
  $("#addTrainButton").on("click", function() {
    event.preventDefault();

    // Initial Values from DOM. Taking user's input
    var trainName = $("#trainNameInput")
      .val()
      .trim();
    var trainDestination = $("#destinationInput")
      .val()
      .trim();
    var firstTrainTime = $("#timeInput")
      .val()
      .trim();
      //parseInt string to integer 
    var trainFrequency = parseInt($("#frequencyInput")
      .val()
      .trim());

    // Verifying the on.click button works

    // console.log(trainName);
    // console.log(trainDestination);
    // console.log(trainTime);
    // console.log(trainFrequency);

    var newTrain = {
      name: trainName,
      destination: trainDestination,
      firstTime: firstTrainTime,
      frequency: trainFrequency
    };
//Firebase write on main level push it above; and when add train is submit it will read 
  database.ref().push(newTrain);
 
//  console.log("Whatssssups");

//find every form group, points to the child in css
   $(".form-group > input").val("");
});

