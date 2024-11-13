import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User' ,
    },
    
    title : {
        type:String,
        required : true,
    },
    content  : {
        type:String,
        required : true,
    },
    completed : { 
        type: Boolean, 
        default: false },
    date : { 
        type: Date, 
        default: Date.now 
    },
});


const Note = mongoose.model("note",noteSchema)
export default Note