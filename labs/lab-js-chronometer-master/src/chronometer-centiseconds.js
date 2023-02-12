class Chronometer {
  constructor(currentTime, intervalId) {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++
      if(callback){
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime < 60) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }    
  };

  getSeconds() {
    return this.currentTime % 60;
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
