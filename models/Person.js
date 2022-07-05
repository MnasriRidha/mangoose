const mongoose = require('mongoose')


const PersonSchema = new schema({
    name : {type:String ,required: true},
    age : {type :Number},
    favoriteFoods : {type :[String]}
})
module.exports = Person = mongoose.model('Person',PersonSchema)//'Person' is the collection name