//NodeJs Ve Sunucu İşlemleri İçin
import express from "express";
//PageControllerdaki İşlemler İçin
import * as pageController from "../controllers/pageController.js";
//Silindiğinde Göstermemesi Reflesh İçin
import * as autMiddleware from "../middlewares/authMiddleware.js";
//Yönledirme
const router=express.Router();
//Eğer / İseteği Gelirse PageControllerdaki GetIndexPage E git
router.route("/").get(pageController.getIndexPage);
//Eğer Register İseteği Gelirse PageControllerdaki GetRegisterPage E git
router.route("/register").get(pageController.getRegisterPage);
//Eğer Login İseteği Gelirse PageControllerdaki GetLoginPage E git
router.route("/login").get(pageController.getLoginPage);
//Eğer Logout İseteği Gelirse PageControllerdaki GetLogout E git
router.route("/logout").get(pageController.getLogout);
//Eğer payment İseteği Gelirse getPaymentPage GetLogout E git
router.route("/payment").get(autMiddleware.authenticateToken,pageController.getPaymentPage);
//Eğer 404 İseteği Gelirse getPaymentPage get404Page E git  
router.route("/404").get(autMiddleware.authenticateToken,pageController.get404Page);
//Routerı Export Ettim
export default router;