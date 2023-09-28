const express = require('express')
const app = express()
require('dotenv').config({path:'./.env'})
const connectDb = require('./db/db')
const routerUser = require('./routes/userRoutes')
const PostRoutes = require('./routes/postRoutes')
const RoomsRoutes = require('./routes/RoomsRoutes')
const cors = require('cors')
const port =  process.env.PORT || 5000 
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//cors
app.use(cors())
//connectDB
connectDb()
//middleware
app.use(express.json())
app.use('/api/user',routerUser)
app.use('/api/post',PostRoutes)
app.use('/api/rooms',RoomsRoutes)

//routes
//connect app
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})