const quizData = [
  {
    question:
      "1. Gece ve gündüzün eşit olduğu tarihler aşağıdakilerden hangisinde doğru verilmiştir ?",
    a: "23 Mart - 22 Eylül",
    b: "21 Mart - 23 Eylül",
    c: "23 Eylül - 21 Ekim",
    d: "21 Mart - 21 Haziran",
    correct: "b",
  },
  {
    question:
      "2.Dünya' mız kendi ekseni etrafındaki dönüşünü ne kadar sürede tamamlar ?",
    a: "1 Yıl",
    b: " 30 Gün",
    c: "24 Saat",
    d: "1 Hafta",
    correct: "c",
  },
  {
    question:
      "3.Canlıların yaşamını sürdürebilmesi büyüyüp gelişmesi için tüketilen içecek ve yiyeceklere ne ad verilir ?",
    a: " Besin",
    b: " Yemek yeme",
    c: "Beslenme",
    d: "Tüketim",
    correct: "c",
  },
  {
    question:
      "4.Marketten satın aldığımız paketlenmiş ürünlerde neye dikkat etmeliyiz ?",
    a: "İçerdiği protein",
    b: " Son kullanma tarihi",
    c: "Paketin rengine",
    d: "Bir pakkete bulunan ürün sayısına",
    correct: "b",
  },
  {
    question: "5.Dünya güneş etrafındaki bir turunu ne kadar sürede bitirir ?",
    a: "1 Yıl",
    b: " 3 Ay",
    c: "31 Gün",
    d: "24 Saat",
    correct: "a",
  },
  {
    question:
      "6.Doğada sıvı halde bulunan tek metal maden aşağıdakilerden hangisinde doğru verilmiştir ?",
    a: "Cıva",
    b: " Bakır",
    c: "Altın",
    d: "Kurşun",
    correct: "a",
  },
  {
    question:
      "7.Dünyanın güneş etrafında 4 kez dönmesi sonucu kaç mevsim yaşanır ?",
    a: "8",
    b: "12",
    c: "16",
    d: "20",
    correct: "c",
  },
  {
    question:
      "8.Dünya kendi ekseni etrafında dönmeseydi aşağıdakilerden hangisi yaşanmazdı ?",
    a: "Mevsimler oluşmazdı.",
    b: " Gece gündüz döngüsü olmazdı.",
    c: "Dünya donardı.",
    d: "Dünyanın her yeri sıcaktan kavrulurdu.",
    correct: "b",
  },
  {
    question: "9.Aşağıdakilerden hangisi bir maden çeşidi değildir ?",
    a: "Cıva",
    b: " Kurşun",
    c: "Linyit",
    d: "Çelik",
    correct: "d",
  },
  {
    question:
      "10.Yer kabuğunun yapısı ile ilgili aşağıdakilerden hangisi doğrudur ?",
    a: "Yer kabuğu Dünya’nın en iç katmanıdır.",
    b: " Doğada büyük yer tutan canlıların yaşadığı parçalara kömür adı verilir.",
    c: "Yer kabuğundan çıkarılan ekonomik değeri yüksek olan taş ve minerallere maden adı verilir.",
    d: "Yer kabuğundaki saf kum olan maden ısıtıldığında bakır elde edilir.",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEls = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEls.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2> ${score}/${quizData.length} Soruya doğru cevap verdiniz.</h2>

            <button onclick="location.reload()">Testi Başlat</button>
            `;
    }
  }
});
var time2_id = document.getElementById("time2");
var seconds = 300;
t_int = setInterval(timer, 1000);
function timer() {
  if (seconds <= 0) {
    time2_id.innerHTML = "Süre: --:--";
  } else {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    time2_id.innerHTML = "Süre:" + m + ":" + s;
    seconds--;
  }
}
