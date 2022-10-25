
import express from "express";

import * as contactController from "../controllers/contactController.js";

const router=express.Router();
//sonra geldi localhost....... /user/(contact) olursa contactController daki createContactUser ı çalıştır
router.route("/contact").post(contactController.createContactUser);
//Routerı Export Ettim
export default router;