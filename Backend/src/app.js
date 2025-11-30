const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()
app.use(cors({
    origin:"*",
    method: ["GET","POST"],
    allowedHeaders: ["Content-Type"]
}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.use('/ai',aiRoutes);

module.exports = app