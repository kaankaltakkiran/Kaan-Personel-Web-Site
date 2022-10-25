
import express from "express";

import * as contactController from "../controllers/contactController.js";

const router=express.Router();

router.route("/contact").post(contactController.createContactUser);
//Routerı Export Ettim
export default router;