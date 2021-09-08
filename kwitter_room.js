
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC6GcKTkjg0Vw69fjeTnswzm5voFQSetNY",
      authDomain: "kwitter-7c03b.firebaseapp.com",
      databaseURL: "https://kwitter-7c03b-default-rtdb.firebaseio.com",
      projectId: "kwitter-7c03b",
      storageBucket: "kwitter-7c03b.appspot.com",
      messagingSenderId: "829487473867",
      appId: "1:829487473867:web:dca566433ef480469c674e",
      measurementId: "G-PVKKCRMGM2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
