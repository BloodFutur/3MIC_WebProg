export class Timer {
  constructor(time, expireFunction) {
    self.time = time;
    self.timerElement = document.getElementById('timer');
    self.intervalController = setInterval(() => {
      // self.timerElement.innerHTML = "Time : " + String(self.time).padStart(5, ' ').InsertAt('.',3);
      self.time--;
      let timeStr = String(self.time).padStart(5, '0');
      self.timerElement.innerHTML = "Time : " + timeStr.slice(0, 3) + '.' + timeStr.slice(3);
      if (self.time == 0) {
        expireFunction();
        clearInterval(self.intervalControler);
      }
    }, 10);
  }
}
