export class Timer {
  constructor(time, expireFunction) {
    self.time = time;
    self.expireFunction = expireFunction;
    self.timerElement = document.getElementById('timer');
    self.pauseButton1 = document.getElementById('pause-1');
    self.pauseButton2 = document.getElementById('pause-2');
    self.pauseButton2.style.visibility = "hidden";
    self.pauseButton1.addEventListener("mouseenter", () => {
      self.pauseButton2.style.visibility = "visible";
      self.pauseButton1.style.visibility = "hidden";
    });
    self.pauseButton1.addEventListener("focus", () => {
      self.pauseButton2.style.visibility = "visible";
      self.pauseButton1.style.visibility = "hidden";
    });
    self.pauseButton2.addEventListener("mouseenter", () => {
      self.pauseButton1.style.visibility = "visible";
      self.pauseButton2.style.visibility = "hidden";
    });
    self.pauseButton2.addEventListener("focus", () => {
      self.pauseButton1.style.visibility = "visible";
      self.pauseButton2.style.visibility = "hidden";
    });
    self.pauseButton2.addEventListener("click", () => {
      alert("All this effort for nothing");
    });
    self.pauseButton1.addEventListener("cilck", () => {
      alert("All this effort for nothing");
    });
    self.timeRunning = true;
    self.intervalController = setInterval(() => {
      // self.timerElement.innerHTML = "Time : " + String(self.time).padStart(5, ' ').InsertAt('.',3);
      if (self.timeRunning) {
        let timeStr = String(self.time).padStart(5, '0');
        self.timerElement.innerHTML = "Time : " + timeStr.slice(0, 3) + '.' + timeStr.slice(3);
        if (self.time == 0) {
          self.expireFunction();
          clearInterval(self.intervalControler);
          self.timeRunning = false;
        }
        self.time--;
      }
    }, 10);
  }
}
