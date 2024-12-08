const mongodb=require('mongoose')

mongodb.connect('mongodb://localhost:27017/NewAdmin')
.then(()=>console.log("DB Created"))
console.log("Mongodb Connected");

//Schema
const adminSchema=new mongodb.Schema({
    name:String,
    email:String,
    password:String,
    dob:String,
    gender:String,
    university:String,
    passyear:String,
    percentage:String,
    qualify:String,
    phone:String,
    confirmPassword:String,
    isAdmin:Boolean,
    isActive:Boolean
})

//creating model
const adminModel=new mongodb.model('users',adminSchema)

module.exports = adminModel;