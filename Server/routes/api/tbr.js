const express = require('express');

import { tbrPosts, createTbrPost, deleteTbrBook } from '../../controllers/tbr.js';
import verifyToken from "../../middleware/authjwt.js";

const router = express.Router();

router.get('/', verifyToken, tbrPosts);
router.post('/', verifyToken, createTbrPost);
router.delete('/', verifyToken, deleteTbrBook);
export default router;