import express from "express";

import { getAllPosts , createPost } from "../controllers/Posts.js"; 
import { generateImage } from "../controllers/GenerateImage.js";

const router =express.Router();

router.post("/generateImage",generateImage);
router.post("/post",createPost);
router.get("/getpost",getAllPosts);


export default router;