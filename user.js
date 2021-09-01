const mongoose = require('mongoose')
const {Schema}=mongoose

const userSchema= new Schema(

{
    name: {type:String, require: true},
    lastName: {type:String, require: true},
    username: {type:String, require: true},
    email:{type:String, require: true},
    phone: {type:Number, require: true},
    password: {type:String, require: true}
},
{
    versionKey: false,
    timestamps: true
}
);

module.exports=mongoose.model("user",userSchema)
