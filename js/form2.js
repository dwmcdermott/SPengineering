// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDPnmANS74OVLBBDsP2FPPeF_N4Vq6b5qs",
  authDomain: "tsensor-19ab7.firebaseapp.com",
  databaseURL: "https://tsensor-19ab7-default-rtdb.firebaseio.com",
  projectId: "tsensor-19ab7",
  storageBucket: "tsensor-19ab7.appspot.com",
  messagingSenderId: "411987860152",
  appId: "1:411987860152:web:417ebb6c168db8e4f9724d"
};

// Initialize Firebase using the configuration data above
firebase.initializeApp(firebaseConfig)


function Submitdata(){
  var surnameVar = document.getElementById('surname').value;
  var forenameVar = document.getElementById('forename').value;
  var locationVar = document.getElementById('location').value;
  var emailVar = document.getElementById('email1').value;

  var myDBConn = firebase.database().ref();

  var myDataLoc = myDBConn.child('TSensor');

  var data = myDataLoc.push();
  data.set(
    {
     surname: surnameVar,
     forename: forenameVar,
    location: locationVar,
    email: emailVar

    }   



);

}