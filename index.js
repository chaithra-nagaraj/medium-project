const express = require('express')
const {mongoose} = require('./config/database')
const {usersRouter} = require('./app/controllers/UserController')
const {storyRouter} = require('./app/controllers/StoryController')
const {topicsRouter} = require('./app/controllers/TopicController')
const {tagsRouter} = require('./app/controllers/TagController')
const cors = require('cors')

const app = express()
const port = 3005

app.use(cors())
app.use(express.json())
app.use('/users',usersRouter)
app.use('/stories',storyRouter)
app.use('./topics',topicsRouter)
app.use('./tags',tagsRouter)

app.listen(port,function(){
    console.log('listening to port',port)
    })
