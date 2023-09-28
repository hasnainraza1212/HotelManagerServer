const express = require('express');
const postController = require('../controller/PostJobController');
// const { verifyToken } = require('../utils/jwt');
const router = express.Router()

router.post('/createPost',postController.CreateJob)
router.get('/getJostPosts',postController.getJostPosts)
module.exports = router;