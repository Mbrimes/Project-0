const express = require('express');

import { readPosts, createReadPost, deleteReadBook } from '../../controllers/readposts.js';
import verifyToken from "../../middleware/authjwt.js";

const router = express.Router(); 

router.get('/', verifyToken, readPosts);
router.post('/', verifyToken, createReadPost);
router.delete('/:id', verifyToken, deleteReadBook);

export default router;