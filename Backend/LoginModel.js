import mongoose from "mongoose";

const EmailSchema=mongoose.Schema({
    email:String,
    name:String,
    pass:String
})

export default mongoose.model('Login', EmailSchema);
