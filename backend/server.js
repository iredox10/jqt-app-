import express from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import routes from './routes/routes.js'
const app = express()
app.use(cors('*'))

mongoose.connect('mongodb://localhost/jqt-app').
    then(res => console.log('connect to mongodb')).
    catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(routes)


app.listen(5000)
