import PostMessage from "../models/postMessage.js"
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages)
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
}

export const updatePost = async (req, res) => {
    const {id : _id} = req.params;
    const { title, description, selectedFile, tags } = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('no post with that id')
    } else {
        const updatedPost = { title, description, tags, selectedFile, _id: _id };
       
        await PostMessage.findByIdAndUpdate(_id, updatedPost, {new: true});
        res.json(updatePost);
    }

}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await PostMessage.findByIdAndRemove(id);
    res.json({message: 'post deleted successfully'});
}

export const favoratePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { favorate: !post.favorate}, {new : true})
    res.json(updatedPost)
}