const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth')
const settingRoutes = require('./routes/setting')

dotenv.config()

const app = express()
app.use(cors())

app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
)

app.use(bodyParser.json())

connectDB()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/settings', settingRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
