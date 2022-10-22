import express from "express";
import * as categoriesController from "../controllers/categoriesController.js";
const router = express.Router();

router.get("/getAllCategories", categoriesController.getAllCategories);
router.post("/newCategories", categoriesController.createCategories);
router.put("/update/:id", categoriesController.updateCategories);
router.delete("/delete/:id", categoriesController.deleteCategories);

export default router;
