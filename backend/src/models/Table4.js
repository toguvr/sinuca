const mongoose = require('mongoose')

const Table4Schema = new mongoose.Schema({
    playerName: String,
    tablePlaying: Number,
    playing: Boolean,
    peopleOnTable: Number,
    startedTime: Number,
    timePlaying: Number,
    PriceToPay: Number
})

module.exports = mongoose.model('Table4', Table4Schema)