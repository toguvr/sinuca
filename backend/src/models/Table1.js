const mongoose = require('mongoose')

const Table1Schema = new mongoose.Schema({
    playerName: String,
    tablePlaying: Number,
    playing: Boolean,
    peopleOnTable: Number,
    startedTime: Number,
    timePlaying: Number,
    PriceToPay: Number
})

module.exports = mongoose.model('Table1', Table1Schema)