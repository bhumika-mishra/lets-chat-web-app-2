//YOUR FIREBASE LINKS
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
      room_name=localStorage.getItem("room_name");

      function send(){
            var msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value="";
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);

 name=message_data['name'];
 message=message_data['message'];
 like=message_data['like'];

 namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
 messagewithtag="<h4 class='message_h4'>"+message +"</h4>";
 likebutton="<button class='btn btn-success' id= "+firebase_message_id +"value="+like+"onclick='updatelike(this.id)'>";
 spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like= "+like+"</span></button><hr>";
 row=namewithtag+messagewithtag+likebutton+spanwithtag;
 document.getElementById("output").innerHTML+=row ;

//End code
      } });  }); }
getData();
function updatelike(message_id){
console.log("clicked on like button:"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({like:updated_likes
});

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
