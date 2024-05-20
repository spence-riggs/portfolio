var isStarted = false;
var playOneMinWarn = false;
var countIn = 3;
var beep = new Audio("audio/beep-sound-8333.mp3");
var start = new Audio("audio/triangle-beep-short-8-185311.mp3");
var oneMinWarning = new Audio("audio/security-alarm-80493.mp3");
var endAudio = new Audio("audio/success-fanfare-trumpets-6185.mp3");

function startCountDown(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    console.log(timer);
    if (timer == 60 && playOneMinWarn) {
      oneMinWarning.play();
      console.log("test");
    }
    if (timer < 11 && timer > 0) {
      beep.play();
    }
    if (timer == 0) {
      endAudio.play();
    }
    timer--;
    if (timer < 0) {
      timer = -1;
      display.textContent = "FINISHED!!";
    }
  }, 1000);
}

function startTimer() {
  setInterval(function () {
    document
      .getElementById("startBtn")
      .style.setProperty("visibility", "hidden");
    document
      .getElementById("minutes-selector")
      .style.setProperty("visibility", "hidden");
    document
      .getElementById("warning-contents")
      .style.setProperty("visibility", "hidden");
    document
      .getElementById("reload-info")
      .style.setProperty("visibility", "visible");
    if (countIn == 3) {
      document
        .getElementById("dot-1")
        .style.setProperty("visibility", "visible");
      countIn--;

      beep.play();
    } else if (countIn == 2) {
      document
        .getElementById("dot-2")
        .style.setProperty("visibility", "visible");
      countIn--;
      beep.play();
    } else if (countIn == 1) {
      document
        .getElementById("dot-3")
        .style.setProperty("visibility", "visible");
      countIn--;
      beep.play();
    } else if (countIn == 0) {
      isStarted = true;
      if (document.getElementById("playWarning").checked) {
        playOneMinWarn = true;
      }
      run();
      countIn--;
      document
        .getElementById("dot-1")
        .style.setProperty("visibility", "hidden");
      document
        .getElementById("dot-2")
        .style.setProperty("visibility", "hidden");
      document
        .getElementById("dot-3")
        .style.setProperty("visibility", "hidden");
      start.play();
    }
  }, 1000);
}

function updateDisplay() {
  duration = document.getElementById("minutes-selector").value * 60;
  let display = document.querySelector("#timer");

  minutes = parseInt(duration / 60, 10);
  seconds = parseInt(duration % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = minutes + ":" + seconds;
}

function run() {
  if (isStarted) {
    duration = document.getElementById("minutes-selector").value * 60;
    console.log(duration);
    let display = document.querySelector("#timer");
    startCountDown(duration, display);
  }
}
