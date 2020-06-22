require('dotenv').config()

const express = require('express');
const app = express()
const mongoose = require('mongoose')

mongoose
	.connect(process.env.DATABASE_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	.then(() => console.log('connected to database'))
	.catch(error => { console.log(`database connection error: ${ error.message }`) });

const db = mongoose.connection

// allow server to handle json
app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('server running'))