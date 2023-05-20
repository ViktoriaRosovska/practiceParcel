import '../css/style.css';


const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    divAction: document.querySelector('.actions')
}
 let p = document.createElement("p");
    p.classList.add('js-clockface');
refs.divAction.append(p);
    

function updateClockFace({ days, hours, minutes, seconds }) {
   
    p.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

class Timer {
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
        this.init();
    }
    init() {
         const timeComponents = this.getTimeComponents(0);
        // const { days, hours, minutes, seconds } = timeComponents;
        this.onTick(timeComponents);
        
    }
     start() {     
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;
        refs.startBtn.setAttribute("disabled", "");
        refs.stopBtn.removeAttribute("disabled", "");
        this.intervalId = setInterval(() => { 
        const currentTime = Date.now();
        const deltaTime = currentTime - startTime;
        const timeComponents = this.getTimeComponents(deltaTime);
        // const { days, hours, minutes, seconds } = timeComponents;
        this.onTick(timeComponents);
        }, 1000)
        
    }
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
         const timeComponents = this.getTimeComponents(0);
        // const { days, hours, minutes, seconds } = timeComponents;
        this.onTick(timeComponents);
        refs.stopBtn.setAttribute("disabled", "");
        refs.startBtn.removeAttribute("disabled", "");
    }
    getTimeComponents(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = this.pad(Math.floor(ms / day));
  // Remaining hours
  const hours = this.pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
 pad(value) {
    return String(value).padStart(2, '0');
}
};


const timer = new Timer({
    onTick: updateClockFace
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));


