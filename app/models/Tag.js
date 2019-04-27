const mongoose = require('mongoose')

const Schema=mongoose.Schema

const tagsSchema = new Schema({
    tags : {
        type : [String],
        required : true 
    }
})

const Tags = mongoose.model('Tags',tagsSchema)

module.exports ={
    Tags
}