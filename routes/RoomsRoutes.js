const express = require('express');
const roomsController = require('../controller/roomsController') ;
const router = express.Router()
router.post('/create/room',roomsController.createRoom)
router.get('/get/rooms',roomsController.getRooms)
module.exports = router;