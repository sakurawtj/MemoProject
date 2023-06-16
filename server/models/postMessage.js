import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    selectedFile: String,
    favorate: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;