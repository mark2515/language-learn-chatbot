import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import users from './data/users.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('The server is running')
})

app.get('/api/users', (req, res) => {
    res.json(users)
})

const PORT = process.env.PORT | 5000

app.listen(PORT, console.log(`The server is running on port ${PORT} under ${process.env.NODE_ENV} mode`))