import mongoose from 'mongoose';
import PostMessage from '../models/models.js';


export const getPosts = async(req, res) => {

    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);

    } catch(error) {

        res.status(404).json({ message: error.message });
        
    }
}

export const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new PostMessage(post);

    try {

        await newPost.save();

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params
    const { title, message, creator, tags, selectedFile, } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatePost = { title, message, creator, tags, selectedFile, _id: id } ;

    await PostMessage.findByIdAndUpdate(id, updatePost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);


    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully" });
}

