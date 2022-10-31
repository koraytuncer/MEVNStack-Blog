import express from "express";
import * as categoriesController from "../controllers/categoriesController.js";
const router = express.Router();

router.get("/getAllCategories", categoriesController.getAllCategories);
router.post("/newCategories", categoriesController.createCategories);
router.put("/updateCategories/:id", categoriesController.updateCategories);
router.delete("/deleteCategories/:id", categoriesController.deleteCategories);

export default router;
