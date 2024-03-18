const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const candidatePostImageRoutes = require('./routes/postCandidateImage')
require('dotenv').config()

connectDB(process.env.MONGO_URL).then(()=>console.log("Connected to DB"))
app.use(express.json())

app.use('/api',candidatePostImageRoutes)

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})