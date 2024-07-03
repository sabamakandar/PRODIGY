let startTime = 0;
let updatedTime = 0;
let difference = 0;
let tInterval;
let running = false;
let lapNumber = 0;

function start() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(updateTime, 10);
        running = true;
    }
}

function pause() {
    if (running) {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    lapNumber = 0;
    document.getElementById('display').innerHTML = '00:00:00.00';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (running) {
        lapNumber++;
        let lapTime = document.getElementById('display').innerHTML;
        let lapEntry = document.createElement('div');
        lapEntry.innerText = `Lap ${lapNumber}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapEntry);
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    document.getElementById('display').innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
