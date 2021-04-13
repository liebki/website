var i = 0;
var out = 'Hey, welcome!';
function write() {
  if (i < out.length) {
    document.getElementById("welcometext").innerHTML += out.charAt(i);
    i++;
    setTimeout(write, 99);
  }
}