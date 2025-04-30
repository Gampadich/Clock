document.getElementById('toggleTheme').addEventListener('click', function(){
    document.body.classList.toggle('dark')
})

let startTime
let elapsedTime = 0
let timerInterval

function updateDisplay() {
    const totalMiliseconds = elapsedTime
    const totalSeconds = Math.floor(elapsedTime / 1000);

    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const miliseconds = String(totalMiliseconds % 1000).padStart(3, '0')

    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}


function startTimer(){
    startTime = Date.now() - elapsedTime
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime
        updateDisplay()
    }, 50)
}

function stopTimer() {
    clearInterval(timerInterval)
}

function resetTimer() {
    clearInterval(timerInterval)
    elapsedTime = 0
    updateDisplay()
}