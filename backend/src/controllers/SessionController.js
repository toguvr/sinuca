const User = require('../models/User')

module.exports = {
    async store(req,res){
        const { username } = req.body

        let user = await User.findOne({username})

        if(!user){
            user = await User.create({ username })
        }

        return res.json(user)
    }
}