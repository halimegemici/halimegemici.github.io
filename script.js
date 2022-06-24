var point = 0;
var arr = [
  "Kırmızı, yeşil, sarı, mor",
  "Dünyanın Güneş etrafında dönmesiyle",
  "1,2 ve 3",
  "21 Mart - 23 Eylül",
  "1 numaralı hareketi sonucu gece ve gündüz oluşur.",
  "24 Saat",
  "Besin",
  "Son kullanma tarihi",
  "1 Yıl",
  "Cıva",
]; // doğru cevap dizisi
var pointArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function control(qn, ans) {
  //alert(qn + ". Soruya cevap verildi:" + ans);
  var par_id = document.getElementById("qp" + qn);
  if (arr[qn - 1] == ans) {
    //cevap doğru ise
    par_id.style.backgroundColor = "#5cfa91";
    if (pointArr[qn - 1] == 0) {
      point += 10;
    }
    pointArr[qn - 1] = 1;
  } else {
    //cevap yanlış ise
    par_id.style.backgroundColor = "#f00";
    if (pointArr[qn - 1] == 1) {
      point -= 10;
    }
    pointArr[qn - 1] = 0;
  }
  document.getElementById("point").innerHTML = "Puan:" + point;
}

var time_id = document.getElementById("time");
var seconds = 300;
t_int = setInterval(timer, 1000);
function timer() {
  if (seconds <= 0) {
    time_id.innerHTML = "Süre: --:--";
  } else {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    time_id.innerHTML = "Süre: " + m + ":" + s;
    seconds--;
  }
}
