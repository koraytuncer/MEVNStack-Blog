import express from "express";
import * as searchController from "../controllers/searchController.js";
const router = express.Router();


router.post("/search",searchController.getSearch)

export default router;
