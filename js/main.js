// Relogio
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// adicione um zero na frente de números<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('headerRelogio').innerHTML=h+":"+m;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}

// Progress Bar
function countdown(elementName, minutes, seconds) {
  var element, endTime, hours, mins, msLeft, time;

  function twoDigits(n) {
    return (n <= 9 ? "0" + n : n);
  }

  function updateTimer() {
    msLeft = endTime - (+new Date);
    if (msLeft < 1000) {
      element.innerHTML = "0:00";
    } else {
      time = new Date(msLeft);
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }
  }

  element = document.getElementById(elementName);
  endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
  updateTimer();
}


//Progress Bar
// JavaScript
const progressBar = document.querySelector('.progress-bar');
const progressBarBg = document.querySelector('.progress-bar-bg');
const progressBarFg = document.querySelector('.progress-bar-foreground');
const progressText = document.querySelector('.progress-text');

let timeElapsed = 0;
const totalTime = 10000; // tempo total em milissegundos
const intervalTime = 100; // intervalo de atualização em milissegundos
const progressIncrement = 1.35; // incremento do progresso a cada intervalo

const intervalId = setInterval(() => {
  timeElapsed += intervalTime;
  
  // atualiza o progresso
  const progress = timeElapsed / totalTime;
  const progressOffset = 135 - (progress * 135);
  progressBarFg.style.strokeDashoffset = progressOffset;
  progressText.textContent = `${Math.round(progress * 100)}%`;
  
  // verifica se o tempo acabou
  if (timeElapsed >= totalTime) {
    clearInterval(intervalId);
    $("#dashboard").addClass("scaled");
  }
}, intervalTime);

