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

    // Initial Values from DOM. Taking user's input
    var trainName = $("#trainNameInput")
      .val()
      .trim();
    var trainDestination = $("#destinationInput")
      .val()
      .trim();
    var trainTime = $("#timeInput")
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
      time: trainTime,
      frequency: trainFrequency
    };
//Firebase write on main level push it above; and when add train is submit it will read 
 database.ref().push(newTrain);
 
//  console.log("Whatssssups");

//find every form group, points to the child in css
 $(".form-group > input").val("");
 });


  // Creating object to hold train data

  //   // Firebase watcher + initial load ex: .on("value")
  //  
  //     //Log everything that's coming out of snapshot
  //     console.log(snapshot.val());
  //     console.log(snapshot.val().name);
  //     console.log(snapshot.val().where);
  //     console.log(snapshot.val().whichTrain);
  //     console.log(snapshot.val().howLong);
  //     console.log(snapshot.val().frequency);
  //   });

  //   //Insert table
  //   $(".table").append("<tr> <td>" + snapshot.val().name + "</td>" + "<td>" + snaphot.val().where + "</td>" + "<td>" + snapshot.val().whichTrain + "</td>" + "<td>" + snapshot.val().howLong + "</td>" + "<td>" + snapshot.val().frequency + "</td>" + "<td>");
    
  //   console.log(snapshot.val());
  // });