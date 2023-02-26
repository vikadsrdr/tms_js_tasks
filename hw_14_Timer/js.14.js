//таймер

let minutes = '00', seconds = '00';
let interval;
const select = elId => document.querySelector(elId);

const timer = select('#time');
timer.innerHTML = `${minutes} : ${seconds}`;

const startBtn = select('#startBtn');
const stopBtn = select('#stopBtn');


startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);


function startTimer() {
    interval = setInterval(() => {
        seconds++;
        seconds < 10 && (seconds = `0${seconds}`);
        if (seconds === 60) {
            minutes++;
            seconds = '00';
            minutes < 10 && (minutes = `0${minutes}`);
        }

        timer.innerHTML = `${minutes} : ${seconds}`;
    }, 100)
};

function stopTimer() {
    clearInterval(interval)
}

