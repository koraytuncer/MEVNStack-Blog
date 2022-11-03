import express from "express";
import * as settingController from "../controllers/settingController.js";
const router = express.Router();

router.post("/settingAdd", settingController.createSetting);
router.get("/getSetting/:id", settingController.getASetting);
router.put("/update/:id", settingController.updateSetting);

export default router;
