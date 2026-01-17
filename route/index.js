import express from 'express'
import multer from 'multer'
import { sendMessageUsingTemplate } from '../controller/whatsapp.js'

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

router.route('/').post(upload.single('file'), sendMessageUsingTemplate)

export default router