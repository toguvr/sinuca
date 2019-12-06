const mongoose = require('mongoose')

const TimerSchema = new mongoose.Schema({
    timer1: Number,
    timer2: Number,
    timer3: Number,
    timer4: Number,
})

module.exports = mongoose.model('Timer', TimerSchema)