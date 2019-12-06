const Timer = require('../models/Timer')

module.exports = {
    async changeTime(req, res) {
        const { table_id } = req.params
        const { time } = req.body

        let changeTimer
        let currentTime

        if (table_id == "1") {
            currentTime = await Timer.find()
            changeTimer = await Timer.findByIdAndUpdate(currentTime[0]._id, { timer1: time })
            currentTime = await Timer.findById(currentTime[0]._id)
        } else if (table_id == "2") {
            currentTime = await Timer.find()
            changeTimer = await Timer.findByIdAndUpdate(currentTime[0]._id, { timer2: time })
            currentTime = await Timer.findById(currentTime[0]._id)
        } else if (table_id == "3") {
            currentTime = await Timer.find()
            changeTimer = await Timer.findByIdAndUpdate(currentTime[0]._id, { timer3: time })
            currentTime = await Timer.findById(currentTime[0]._id)
        } else if (table_id == "4") {
            currentTime = await Timer.find()
            changeTimer = await Timer.findByIdAndUpdate(currentTime[0]._id, { timer4: time })
            currentTime = await Timer.findById(currentTime[0]._id)
        }


        return res.json(currentTime)
    },

    async getTime(req, res) {

        const id = await Timer.find()
        const timers = await Timer.findById(id[0]._id)

        return res.json(timers)
    },

    async store(req, res) {

        await Timer.create({
            timer1: 0,
            timer2: 0,
            timer3: 0,
            timer4: 0,
        })

        const create = await Timer.find()

        return res.json(create)
    }
}