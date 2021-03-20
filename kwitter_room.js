var firebaseConfig = {
      apiKey: "AIzaSyBXDyWfOeHH8O-VA2oQEKN4Bluke-pjrsw",
      authDomain: "kwitter-753df.firebaseapp.com",
      databaseURL: "https://kwitter-753df-default-rtdb.firebaseio.com",
      projectId: "kwitter-753df",
      storageBucket: "kwitter-753df.appspot.com",
      messagingSenderId: "212851813202",
      appId: "1:212851813202:web:659d27ae06de78b2f2a88b"
    };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username: "); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function add_room(){
      room_name = document.getElementById("room_name").value; 

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
} 

function getData() {firebase.database().ref("/").on('value', function(snapshot){
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){
      childKey  = childSnapshot.key;
      Room_names = childKey;

      console.log("Room name - " + Room_names);
      row = "<div class = 'room_name' id =" + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>"; 
      document.getElementById("output").innerHTML += row;

      });
      });
}
getData(); 

function redirectToRoomName(name){
      console.log(name); 
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page2.html"; 
}

function logout(){
      localStorage.removeItem("Username: "); 
      localStorage.removeItem("room_name");
      window.location="index.html"; 
} 