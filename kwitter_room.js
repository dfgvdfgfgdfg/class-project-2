// Your web app's Firebase configuration

const firebaseConfig = {

      apiKey: "AIzaSyCPFwz-K1OG7posEIKhNCtlhnaqAhRVQd8",
    
      authDomain: "kwitter-bec6e.firebaseapp.com",
    
      databaseURL: "https://kwitter-bec6e-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-bec6e",
    
      storageBucket: "kwitter-bec6e.appspot.com",
    
      messagingSenderId: "250683760012",
    
      appId: "1:250683760012:web:376680fede112642f84aa9"
    
    };
    
    
    // Initialize Firebase
    
      firebase.initializeApp(firebaseConfig);



    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({ 
                purpose : "adding room name"
      })
           localStorage.setItem("room_name" , room_name) ;
           window.location="kwitter_page.html";   
          
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names= childKey;
      //Start code
console.log("Room Name  -" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

getData();
