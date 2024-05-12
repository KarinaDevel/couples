function startTimer() {
    const time = document.querySelector('.state__time');
    const moves = document.querySelector('.state__moves');
    interval = setInterval(() => {
      totalTime--;
      moves.textContent = `moves: ${totalFlips}`;
      time.textContent = `time: ${totalTime} sec`;
      if (totalTime === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  let totalTime = 60;
  let interval;
  function stopTimer(){
  
  }
  export{ totalTime, interval, stopTimer, startTimer };