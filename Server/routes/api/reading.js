import { readingPosts, createreadingPost, updatePost, deletePost } from '../../controllers/posts.js';
import verifyToken from "../../middleware/authjwt.js";

const express = require('express');

const router = express.Router();

router.get('/', verifyToken, readingPosts);
router.post('/', verifyToken, createreadingPost);
router.patch('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);

export default router;