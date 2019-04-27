const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/medium-project',{useNewUrlParser :true})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(){
        console.log('err connection to db')
    })

module.exports = {
    mongoose
}