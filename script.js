let timer;
let isRunning = false;
let lapCount = 1;

function startStop() {
    const startStopBtn = document.getElementById('startStop');
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
        isRunning = true;
    } else {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    document.getElementById('display').textContent = '00:00:00';
    isRunning = false;
    document.getElementById('startStop').textContent = 'Start';
    lapCount = 1;
    document.getElementById('lapList').innerHTML = '';
}

function recordLap() {
    const lapTime = document.getElementById('display').textContent;
    const lapList = document.getElementById('lapList');
    const newLapItem = document.createElement('li');
    newLapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(newLapItem);
    lapCount++;
}

function updateTime() {
    const display = document.getElementById('display');
    const time = display.textContent.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    display.textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
}
