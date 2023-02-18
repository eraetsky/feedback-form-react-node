require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const sequelize = require('./db')

const cors = require('cors')
const Feedback = require("./model");
const app = express()
app.use(cors())
app.use(express.json())

async function add_feedback(req,res) {
    const {name,email,feedback} = req.body
    const candidate = await Feedback.findOne({where: {email}})
    if (!candidate){
        await Feedback.create({name,email,feedback})
        console.log(feedback)
    }
}

 app.post('/submit', (req,res) => {
    add_feedback(req,res)
    res.status(200);
    res.json({msg: "works"})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>{console.log(`Server has been started on port ${PORT}`)})
    } catch (e) {
        console.log(e);
    }
}

start()
