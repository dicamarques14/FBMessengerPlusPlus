// ==UserScript==
// @name FB Messenger ++
// @namespace https://github.com/dicamarques14/
// @version 0.4
// @description hide messengers list of conversations
// @match https://www.messenger.com/*
// @match https://www.facebook.com/messages/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @author       Dg
// @require http://code.jquery.com/jquery-latest.js
// @grant        none
// @run-at document-idle
// @updateURL    https://github.com/dicamarques14/FBMessengerPlusPlus/raw/master/fbmessengerpp.meta.js
// @downloadURL  https://github.com/dicamarques14/FBMessengerPlusPlus/raw/master/fbmessengerpp.user.js
// ==/UserScript==
function sleep(milliseconds) {
  console.log("sleeping");
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
var enable = true;
console.log("OLA");
console.log(window.location.pathname);
$( document ).ready(function() {
  console.log("Loaded");
    if(window.location.pathname === "/"){
     return;
    }
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '._1ht3 { background-color: #365899; }';
  document.getElementsByTagName('head')[0].appendChild(style);
  
  if(enable){
    var convThreads = document.getElementsByClassName('_1enh');
    while(convThreads[0] === undefined){
      sleep(1000);
      convThreads = document.getElementsByClassName('_1enh');

    }
    console.log(convThreads[0]);
    if(convThreads === undefined){
      console.log("i tried");
    }
    else{
      convThreads[0].style = "flex-basis: 110px !important ;min-width: 60px;";
    }
  }
console.log("xau");
});
