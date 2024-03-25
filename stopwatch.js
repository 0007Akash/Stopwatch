let start = document.getElementById("strt");
  var s = 0;
  var m = 0;
  var h = 0;
  var timerId;
  let isTimerRunning = false;
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let hr = document.getElementById("hr");

  start.addEventListener("click", function () {
    if (!isTimerRunning) {
      isTimerRunning = true;
      start.disabled = true;
      function startTimer() {
        s++;
        sec.textContent = s + " s";
        if (s == 60) {
          s = 0;
          m++;
          min.textContent = m + " m";
          if (m == 60) {
            m = 0;
            h++;
            hr.textContent = h + " h";
          }
        }
      }
    }

    timerId = setInterval(startTimer, 1000);
  });

  let stop = document.getElementById("stp");
  stop.addEventListener("click", function () {
    clearInterval(timerId);
    start.disabled = false;
    isTimerRunning = false;
    timerId = null;
  });
  let reset = document.getElementById("res");
  res.addEventListener("click", function () {
    clearInterval(timerId);
    isTimerRunning = false;
    start.disabled = false;
    timerId = null;
    s = 0;
    m = 0;
    h = 0;
    min.textContent = "";
    hr.textContent = "";
    sec.textContent = 0 + " s";
  });