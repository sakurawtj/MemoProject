import express from "express";
import { getPosts, createPost, updatePost, deletePost, favoratePost } from "../controllers/posts.js";

const router = express.Router();

//http://localhost:6000/posts
router.get('/',  getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/favoratePost', favoratePost)


export default router;