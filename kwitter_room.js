  var firebaseConfig = {
    apiKey: "AIzaSyAB_VPYB9oLJUI_3t8siFRaejY6pLRYOmE",
    authDomain: "letschat-c12dd.firebaseapp.com",
    databaseURL: "https://letschat-c12dd-default-rtdb.firebaseio.com",
    projectId: "letschat-c12dd",
    storageBucket: "letschat-c12dd.appspot.com",
    messagingSenderId: "776933976424",
    appId: "1:776933976424:web:2ee1cd660110d3b39d0edd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
                document.getElementById("output").innerHTML += row;

                //End code
          });
    });
}
getData();