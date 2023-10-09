const firebaseConfig = {
   apiKey: "AIzaSyDAAE9K7asLT6z8YBILFZevasxHLjuPcTw",
   authDomain: "bogdogtest2.firebaseapp.com",
   databaseURL: "https://bogdogtest2-default-rtdb.firebaseio.com",
   projectId: "bogdogtest2",
   storageBucket: "bogdogtest2.appspot.com",
   messagingSenderId: "128491421941",
   appId: "1:128491421941:web:96b3d70a48d89f2ad1c5bc"
 };
 
 firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id=" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "bogdogchat.html";
}
   
function rediredtToRoomName(name) {
   console.log(name);
   localStorage.setItem("room_name, name");
   window.location = "bogdogchat.html";
}

function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}