import mongoose, { Schema, type Document } from "mongoose";

export interface IChat extends Document {
    participants: mongoose.Types.ObjectId[];
    lastMessage?: mongoose.Types.ObjectId;
    lastMessageAt?: Date;
    createdAt: Date;
    updateAt: Date;
}
//we have two p[articipents [jane,john] = [12,456] we use there ids form mongoose 
const ChatSchema = new Schema<IChat>({
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Message",
            default: null,
        },
    ],
    lastMessage: {
        type: Schema.Types.ObjectId,
        ref: "Message",
        default: null,
    },
    lastMessageAt: {
        type: Date,
        default: Date.now,
    },
},
{
    timestamps:true
});
 export const Chat = mongoose.model("Chat", ChatSchema);
