const Table1 = require('../models/Table1')
const Table2 = require('../models/Table2')
const Table3 = require('../models/Table3')
const Table4 = require('../models/Table4')
const Timer = require('../models/Timer')

module.exports = {
    async index(req, res) {
        const { table_id } = req.params
        let table
        if (table_id == 1) {
            table = await Table1.find({ playing: true })
        } else if (table_id == 2) {
            table = await Table2.find({ playing: true })
        } else if (table_id == 3) {
            table = await Table3.find({ playing: true })
        } else if (table_id == 4) {
            table = await Table4.find({ playing: true })
        }

        const showTime = await Timer.find()

        req.io.emit('updatedPlayersList', {players: table, tableNumber: table_id, timer: showTime[0]})

        return res.json(table)
    },

    async edit(req, res) {
        const { table_id } = req.params
        const { _id, PriceToPay, timePlaying } = req.body.playerSelected
        let player
        let currentPlayer
        if (table_id == 1) {
            player = await Table1.findByIdAndUpdate(_id, { playing: false, PriceToPay, timePlaying })
            currentPlayer = await Table1.findById(_id)
        } else if (table_id == 2) {
            player = await Table2.findByIdAndUpdate(_id, { playing: false, PriceToPay, timePlaying })
            currentPlayer = await Table2.findById(_id)
        } else if (table_id == 3) {
            player = await Table3.findByIdAndUpdate(_id, { playing: false, PriceToPay, timePlaying })
            currentPlayer = await Table3.findById(_id)
        } else if (table_id == 4) {
            player = await Table4.findByIdAndUpdate(_id, { playing: false, PriceToPay, timePlaying })
            currentPlayer = await Table4.findById(_id)
        }

        

        return res.json(currentPlayer)
    },


    async store(req, res) {
        const { playerName, tablePlaying, playing, peopleOnTable, startedTime, timePlaying, PriceToPay } = req.body
        const { table_id } = req.params

        let addPlayer
        if (table_id === "1") {
            addPlayer = await Table1.create({
                playerName,
                tablePlaying,
                playing,
                peopleOnTable,
                startedTime,
                timePlaying,
                PriceToPay,
            })
        } else if (table_id === "2") {
            addPlayer = await Table2.create({
                playerName,
                tablePlaying,
                playing,
                peopleOnTable,
                startedTime,
                timePlaying,
                PriceToPay,
            })
        } else if (table_id === "3") {
            addPlayer = await Table3.create({
                playerName,
                tablePlaying,
                playing,
                peopleOnTable,
                startedTime,
                timePlaying,
                PriceToPay,
            })
        } else if (table_id === "4") {
            addPlayer = await Table4.create({
                playerName,
                tablePlaying,
                playing,
                peopleOnTable,
                startedTime,
                timePlaying,
                PriceToPay,
            })
        }

        return res.json(addPlayer)
    }
}