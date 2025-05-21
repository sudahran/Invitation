// undngan start
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var to = GetURLParameter("to");
document.getElementById("nama").innerHTML = to ? decodeURI(to) : "-";

// waktu start
const countDownDate = new Date("Juni 18, 2025 08:30:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Carasingkat").innerHTML = "EXPIRED";
  }
}, 1000);
// waktu end

 function salin(id) {
      const text = document.getElementById(id).innerText;
      navigator.clipboard.writeText(text).then(() => {
        alert("Nomor rekening berhasil disalin!");
      });
    }

    // modal start
window.onload = function () {
  document.getElementById("klikmodal").click();
};
// modal end
// lagu start
const lagu = document.getElementById("lagu");
function playAudio() {
  lagu.play();
}
function stopAudio() {
  lagu.pause();
}
// lagu end