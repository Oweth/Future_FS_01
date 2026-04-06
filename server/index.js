const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

require('dotenv').config()

const app = express()
//middleware 
app.use(cors())
app.use(express.json())
//test route
app.get('/', (req,res)=>{
    res.send('Server is running!')
})
//contact route
app.post('/contact', async(req,res)=>{
    const {name, email, message} = req.body

    //configure email transporter
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth: {
            user : process.env.EMAIL_USER,
            pass : process.env.EMAIL_PASS
        }
    })

    //Email options
    const mailOptions = {
        from : email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact Form - Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    }
    
    //error handling
    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({message: 'Message sent successfully!'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Failed to send message. Please try again later.'})
    }
})
//Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})