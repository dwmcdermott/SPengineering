
var firebaseConfig = {
    apiKey: "AIzaSyDPnmANS74OVLBBDsP2FPPeF_N4Vq6b5qs",
    authDomain: "tsensor-19ab7.firebaseapp.com",
    databaseURL: "https://tsensor-19ab7-default-rtdb.firebaseio.com",
    projectId: "tsensor-19ab7",
    storageBucket: "tsensor-19ab7.appspot.com",
    messagingSenderId: "411987860152",
    appId: "1:411987860152:web:417ebb6c168db8e4f9724d"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var myTemps = [];
  
  var myDBConn = firebase.database().ref("MyTemperature");
  
  myDBConn.on("child_added", function(data, prevChildKey){
    
    var dataPoint = data.val();

    myTemps.push(parseInt(dataPoint.Temp));

    var totalT = 0;
    var i=0;
    for (i=0; i<myTemps.length; i++){
      totalT += myTemps[i];
    }

    var average = totalT / myTemps.length;

    document.getElementById("averageT").innerHTML=average;
    document.getElementById("LiveT").innerHTML=myTemps[myTemps.length - 1];
  });