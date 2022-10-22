import express from "express";
import * as settingController from "../controllers/settingController.js";
const router = express.Router();

router.post("/createSetting", settingController.createSetting);
router.get("/:id", settingController.getASetting);
router.put("/update/:id", settingController.updateSetting);
router.delete("/delete/:id", settingController.deleteSetting);

export default router;
