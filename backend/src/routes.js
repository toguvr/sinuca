const express = require ('express')
const multer = require ('multer')
const uploadConfig = require('./config/upload')
const BookingController = require('./controllers/BookingController')
const TableController = require('./controllers/TableController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/table/:table_id/addplayer',TableController.store)
routes.get('/table/:table_id',TableController.index)
routes.put('/player/:table_id',TableController.edit)
routes.put('/update/:table_id',BookingController.change)
routes.put('/time/:table_id',BookingController.timer)

module.exports = routes