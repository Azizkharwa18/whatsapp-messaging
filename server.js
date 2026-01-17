import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import httpStatus from 'http-status-codes'
import router from './route/index.js'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

dotenv.config()

const app = express()
const swaggerDocument = YAML.load('./swagger.yaml')

app.use(cors())
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api/messages', router)

app.get('/', (req, res) => {
    res.send("Our API")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
