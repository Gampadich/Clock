document.getElementById('toggleTheme').addEventListener('click', function(){
    document.body.classList.toggle('dark')
})

let TVhourFormat = false 

function updateClock(){
    const now = new Date()

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    let period = ''

    if (TVhourFormat){
        period = hours >= 12 ? ' PM' : ' AM'
        hours = hours % 12 
        hours = hours ? hours : 12
    }
    
    const formatedTime = [
        hours = hours < 10 ? '0' + hours : hours,
        minutes = minutes < 10 ? '0' + minutes : minutes,
        seconds = seconds < 10 ? '0' + seconds : seconds
    ].join(':') + (TVhourFormat ? `${period}` : '')


    document.getElementById('clock').textContent = formatedTime
}

function updateDate(){
    const now = new Date()
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    const formatedDate = now.toLocaleDateString('en-GB', options)

    document.getElementById('date').textContent = formatedDate
}

setInterval(updateDate, 1000)
setInterval(updateClock, 1000)

updateClock()

document.getElementById('toggleFormat').addEventListener('change', function(){
    TVhourFormat = this.checked
    updateClock()
})