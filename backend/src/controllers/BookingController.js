const Table1 = require('../models/Table1')
const Table2 = require('../models/Table2')
const Table3 = require('../models/Table3')
const Table4 = require('../models/Table4')

module.exports = {
    async change(req, res) {
        const { table_id } = req.params
        const { playersArray } = req.body
        let player

        if (table_id == "1") {
            for (player of playersArray) {
                player = await Table1.findByIdAndUpdate(player._id, { finishTime: player.finishTime, PriceToPay: player.PriceToPay, timePlaying: player.timePlaying, startedTime: player.startedTime, peopleOnTable: player.peopleOnTable })
            }
        } else if (table_id == "2") {
            for (player of playersArray) {
                player = await Table2.findByIdAndUpdate(player._id, { finishTime: player.finishTime, PriceToPay: player.PriceToPay, timePlaying: player.timePlaying, startedTime: player.startedTime, peopleOnTable: player.peopleOnTable })
            }
        } else if (table_id == "3") {
            for (player of playersArray) {
                player = await Table3.findByIdAndUpdate(player._id, { finishTime: player.finishTime, PriceToPay: player.PriceToPay, timePlaying: player.timePlaying, startedTime: player.startedTime, peopleOnTable: player.peopleOnTable })
            }
        } else if (table_id == "4") {
            for (player of playersArray) {
                player = await Table4.findByIdAndUpdate(player._id, { finishTime: player.finishTime, PriceToPay: player.PriceToPay, timePlaying: player.timePlaying, startedTime: player.startedTime, peopleOnTable: player.peopleOnTable })
            }
        }
        
        return res.json(player)
    },

    async timer(req, res) {
        const { table_id } = req.params

        let player
        let playersArray
        if (table_id == "mesa1") {
            playersArray = await Table1.find({ playing: true })
            for (player of playersArray) {
                player = await Table1.findByIdAndUpdate(player._id, { finishTime: 0, startedTime: 0, peopleOnTable: 2 })
            }
            playersArray = await Table1.find({ playing: true })
        } else if (table_id == "mesa2") {
            playersArray = await Table2.find({ playing: true })
            for (player of playersArray) {
                player = await Table2.findByIdAndUpdate(player._id, { finishTime: 0, startedTime: 0, peopleOnTable: 2 })
            }
            playersArray = await Table2.find({ playing: true })
        } else if (table_id == "mesa3") {
            playersArray = await Table3.find({ playing: true })
            for (player of playersArray) {
                player = await Table3.findByIdAndUpdate(player._id,{ finishTime: 0, startedTime: 0, peopleOnTable: 2 })
            }
            playersArray = await Table3.find({ playing: true })
        } else if (table_id == "mesa4") {
            playersArray = await Table4.find({ playing: true })
            for (player of playersArray) {
                player = await Table4.findByIdAndUpdate(player._id, { finishTime: 0, startedTime: 0, peopleOnTable: 2 })
            }
            playersArray = await Table4.find({ playing: true })
        }
        
        return res.json(playersArray)
    }
}