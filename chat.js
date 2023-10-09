const firebaseConfig = {
    apiKey: "AIzaSyDeh6yodmO4UxSQG5xeO9XlGmEKRUHQbtQ",
    authDomain: "bogdogchatsystems.firebaseapp.com",
    databaseURL: "https://bogdogchatsystems-default-rtdb.firebaseio.com",
    projectId: "bogdogchatsystems",
    storageBucket: "bogdogchatsystems.appspot.com",
    messagingSenderId: "570550333277",
    appId: "1:570550333277:web:bfc4211fa0abff1c1b02b4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send() {
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
}