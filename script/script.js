function playNow() {
  window.open('https://google.com', '_self');
}

function legend() {
  window.open('/legend.html', '_self');
}

function map() {
  window.open('/map.html', '_self');
}

function aboutus() {
  window.open('/aboutus.html', '_self');
}

function registration() {
  window.open('/registration.html', '_self');
}
function home() {
  window.open('/index.html', '_self');
}
function ash() {
  var a = document.getElementById('character');
  a.style.backgroundImage = "url('../asset/character/ash.jpg')";
  document.getElementById('text-header').innerHTML = 'Ash';
  document.getElementById('text-desc').innerHTML = 'Incisive Instigator';
}
function bangalore() {
  var a = document.getElementById('character');
  a.style.backgroundImage = "url('../asset/character/bangalore.jpg')";
  document.getElementById('text-header').innerHTML = 'Bangalore';
  document.getElementById('text-desc').innerHTML = 'Professional Soldier';
}
function bloodhound() {
  var a = document.getElementById('character');
  a.style.backgroundImage = "url('../asset/character/bloodhound.jpg')";
  document.getElementById('text-header').innerHTML = 'Bloodhound';
  document.getElementById('text-desc').innerHTML = 'Technological Tracker';
}

function caustic() {
  var a = document.getElementById('character');
  a.style.backgroundImage = "url('../asset/character/caustic.jpg')";
  document.getElementById('text-header').innerHTML = 'Caustic';
  document.getElementById('text-desc').innerHTML = 'Toxic Trapper';
}

function crypto() {
  var a = document.getElementById('character');
  a.style.backgroundImage = "url('../asset/character/crypto.jpg')";
  document.getElementById('text-header').innerHTML = 'Crypto';
  document.getElementById('text-desc').innerHTML = 'Surveillance Expert';
}

function fuze() {
  var a = document.getElementById('character');
  a.style.backgroundImage = "url('../asset/character/fuze.jpg')";
  document.getElementById('text-header').innerHTML = 'Fuze';
  document.getElementById('text-desc').innerHTML =
    'Bombastic Explosives Expert';
}

function gilblatar() {
  var a = document.getElementById('character');
  a.style.backgroundImage = "url('../asset/character/gilblatar.jpg')";
  document.getElementById('text-header').innerHTML = 'Gilblatar';
  document.getElementById('text-desc').innerHTML = 'Shielded Fortress';
}

function horizon() {
  var a = document.getElementById('character');
  a.style.backgroundImage = "url('../asset/character/horizon.jpg')";
  document.getElementById('text-header').innerHTML = 'Horizon';
  document.getElementById('text-desc').innerHTML = 'Gravitational Manipulator';
}
function mapNavbar() {
  var a = document.getElementById('map-dropdown');
  a.classList.add('show');
}

function mapCloseNavbar() {
  var a = document.getElementById('map-dropdown');
  a.classList.remove('show');
  document.getElementById('text-header').innerHTML = 'Ash';
  document.getElementById('text-desc').innerHTML = 'Incisive Instigator';
}

// window.onclick = function(){
//   var a = document.getElementById('map-dropdown');
//   a.classList.remove('show');
// }
