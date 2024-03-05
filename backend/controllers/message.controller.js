import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js'

export const sendMessage= async (req,res) => {
    try {
        const {message} =req.body;
        const {id:receiverId} =req.params;
        const senderId=req.user._id
        let conversation= await Conversation.findOne({
            participants: {$all: [senderId,receiverId]}, // find a conversation array where participants contains all these fields
        });

        if(!conversation){
            conversation= await Conversation.create({
                participants: [senderId,receiverId],
            });
        }
        const newMessage = new Message({
            // senderId: senderId,
            // receiverId:receiverId,
            // message: message,
            senderId,
            receiverId,
            message,

        });
        if(newMessage){
            conversation.messages.push(newMessage._id);

        }

        //SOCKET IO FUNCTIONALITY WILL COME HERE
        //saving to db
        // await conversation.save();
        // await newMessage.save(); // take time

        //this will run i parallel
        await Promise.all([conversation.save(),newMessage.save()]);
        
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({error: "Internal server error"});
    }
};

export const getMessages= async(req,res) => {
    try {
        const {id:userToChatId} =  req.params;
        const senderId= req.user._id ;
        const conversation=await Conversation.findOne({
            participants: { $all : [senderId , userToChatId]},
        }).populate("messages"); //mongoose - inside this conversation give us eacj message on eby one 
        //not refrence by message itself
        if(!conversation) return res.status(200).json([]);

        const messages=conversation.messages;
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}