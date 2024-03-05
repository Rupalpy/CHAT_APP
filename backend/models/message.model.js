import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //sender id will be theid from the user model
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    message: {
        type: String,
       
        required: true
    }
    //createdAT , updatedAt
   
},{timestamps: true});
const Message = mongoose.model("Message",messageSchema); 
export default Message;