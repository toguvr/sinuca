const mongoose = require('mongoose')

const Table3Schema = new mongoose.Schema({
    playerName: String,
    tablePlaying: Number,
    playing: Boolean,
    peopleOnTable: Number,
    startedTime: Number,
    timePlaying: Number,
    PriceToPay: Number
})

module.exports = mongoose.model('Table3', Table3Schema)