import express from "express";
import * as postController from "../controllers/postController.js";
const router = express.Router();

router.get("/getAllPosts", postController.getAllPost);
router.post("/newPost", postController.createPost);
router.get("/:slug", postController.getAPost);
router.put("/update/:id", postController.updatePost);
router.delete("/delete/:id", postController.deletePost);

export default router;
