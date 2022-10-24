//NodeJs Ve Sunucu İşlemleri İçin
import express from "express";
//UserController İşlemler İçin
import * as userController from "../controllers/userController.js";
//Silindiğinde Göstermemesi Reflesh İçin
import * as autMiddleware from "../middlewares/authMiddleware.js";
//Yönledirme
const router=express.Router();
//Eğer Register Post İsteği Gelirse UserControllerdaki CreateUser E git
router.route("/register").post(userController.createUser);
//Eğer Login Post İseteği Gelirse UserControllerdaki LoginUser E git
router.route("/login").post(userController.loginUser);
//Routerı Export Ettim
export default router;