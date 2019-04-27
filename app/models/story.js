const express =require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const storiesSchema = new Schema({
        title:{
            type:String,
            required:true,
            unique:true
        },
        body:{
            type:String,
            required:true,
            unique:true
        },
        createdAt:{
                type:Date,
                default:Date.now
            },
       
        user:{
            type:Schema.Types.ObjectId,
            ref: 'User'
        },
        tag:{
            type:[Schema.Types.ObjectId],
            ref: 'Tags'
        },
        topic:{
            type:Schema.Types.ObjectId,
            ref: 'Topic'
        },
       

})


const Story = mongoose.model('Story',storiesSchema )
module.exports = {
    Story
}


// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const storySchema = new Schema ({
//     title : {
//         type : String,
//         required : true 
//     },
//     body : {
//         type : String,
//         required : true
//     },
//     user : {
//         type : Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     topic :{
//         type : String,
//         required : true,
//         unique : true
//     }

  
// })
// const Story = mongoose.model('Story',storySchema)
// module.exports = {
//     Story
// }