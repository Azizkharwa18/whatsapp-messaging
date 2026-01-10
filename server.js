import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import httpStatus from 'http-status-codes'


const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send("Our API")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
