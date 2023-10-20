
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCRBuAZa7DtzWjajTTHh85g_8nZA6cksW4",
      authDomain: "kwitter-f8efa.firebaseapp.com",
      databaseURL: "https://kwitter-f8efa-default-rtdb.firebaseio.com",
      projectId: "kwitter-f8efa",
      storageBucket: "kwitter-f8efa.appspot.com",
      messagingSenderId: "575816255573",
      appId: "1:575816255573:web:31787a79c1b42e5099ecdc",
      measurementId: "G-PH1G54P2N0"
    };
  
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="welcome  "+user_name+"!";

      function addroom(){
            Room_name=document.getElementById("roomname").value;
            firebase.database().ref("/").child(Room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("roomname",Room_name);
            window.location="kwitter_page.html";
      }
      
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname:"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}