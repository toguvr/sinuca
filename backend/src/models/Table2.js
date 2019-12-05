const mongoose = require('mongoose')

const Table2Schema = new mongoose.Schema({
    playerName: String,
    tablePlaying: Number,
    playing: Boolean,
    peopleOnTable: Number,
    startedTime: Number,
    timePlaying: Number,
    PriceToPay: Number
})

module.exports = mongoose.model('Table2', Table2Schema)