let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/CH-webphoto.jpg') {
      myImage.setAttribute('src','images/CH-webphoto-neg.jpg');
    } else {
      myImage.setAttribute('src','images/CH-webphoto.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
  	setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello, $ {myName}';
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}
}

myButton.onclick = function() {
  setUserName();
}