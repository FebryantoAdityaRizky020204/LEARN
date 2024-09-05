const notifier = require('node-notifier')
const moment = require('moment')

const argTime = process.argv.slice(2)

const PODOMORO_DURATION = argTime[0]
const BREAK_DURATION = argTime[1]

let isWorking = false
let remainingTime = 0

function formattingTime(totalSecond) {
    const duration = moment.duration(totalSecond, 'seconds')
    const hours = duration.hours().toString().padStart(2, '0')
    const minutes = duration.minutes().toString().padStart(2, '0')
    const second = duration.seconds().toString().padStart(2, '0')

    return `${hours}:${minutes}:${second}`
}

function startTimer(duration) {
    isWorking = !isWorking
    remainingTime = duration * 60

    const timer = setInterval(() => {
        remainingTime--;
        const formattedTime = formattingTime(remainingTime)
        console.log(`${isWorking ? 'Work' : 'Break'} : ${formattedTime}`); 

        if(remainingTime === 0) {
            clearInterval(timer)
            notifier.notify({
                title: !isWorking ? 'Working Time' : 'Good Break',
                message: !isWorking ? 'Time To Works' : 'Time To Break',
                sound: true,
                wait: true
            })
            startTimer(isWorking ? BREAK_DURATION : PODOMORO_DURATION)
        }
    }, 1000)
}

startTimer(PODOMORO_DURATION)

