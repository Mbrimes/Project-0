const express = require('express');

import { readPosts, createReadPost, deleteReadBook } from '../controllers/readposts.js';
import auth from '../middlewares/' 