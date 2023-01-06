/**
 * @fileoverview Timer class
 */

/**
 * @class Timer
 * @classdesc This class is responsible for the timer.
 */
export class Timer {

  // Set time to solve the level by using the difficulty slider
  readDifficulty(slider) {
    self.difficulty = 1.5 - slider.value * 0.01;
    self.time = self.originalTime * self.difficulty;
  }

  constructor(time, expireFunction) {
    self.originalTime = time;
    self.difficulty = 1.0;
    self.time = time;

    let difficultySlider = document.getElementById('difficulty-slider');
    this.readDifficulty(difficultySlider);
    difficultySlider.addEventListener("change", () => {
      this.readDifficulty(difficultySlider);
    })

    self.expireFunction = expireFunction;
    self.timerElement = document.getElementById('timer');

    // Feature : Move the pause button when the mouse is over it
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
    self.pauseButton1.addEventListener("click", () => {
      alert("All this effort for nothing");
    });

    
    self.timeRunning = false;
    self.intervalController = setInterval(() => {
      // self.timerElement.innerHTML = "Time : " + String(self.time).padStart(5, ' ').InsertAt('.',3);
      if (self.timeRunning) {
        let timeStr = String(self.time).padStart(5, '0');
        self.timerElement.innerHTML = "Time : " + timeStr.slice(0, 3) + '.' + timeStr.slice(3);
        if (self.time <= 0) {
          self.expireFunction();
          clearInterval(self.intervalControler);
          self.timeRunning = false;
        }
        self.time--;
      }
    }, 10);
  }

  /**
   * Set the time of the timer.
   * @param {Number} time 
   */
  setTime(time) {
    self.time = time;
  }

  /**
   * @returns {Number} The time of the timer.
   */
  getTime() {
    return self.time;
  }

  /**
   * Start the timer.
   */
  start() {
    self.timeRunning = true;
  }

  /**
   * Stop the timer.
   */
  stop() {
    self.timeRunning = false;
  }
}
