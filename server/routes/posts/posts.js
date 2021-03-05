import express from 'express';

import { getPosts, createPost, updatePost, deletePost } from '../../controllers/index.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.get('/;id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;