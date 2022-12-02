//NodeJs Ve Sunucu İşlemleri İçin
import express from "express";
//Çevre Değişkenleri İçin(.env)
import dotenv from "dotenv"; 
//Veritabanı Bağlantısı için
import conn from "./db.js";
//Sayfa Yönlendirme İçin
import pageRoute from "./routes/pageRoute.js";
//Sayfa Yönlendirme İçin(Kullanıcı)
import userRoute from "./routes/userRoute.js";
//Sayfa Yönlendirme İçin(contact)
import contactRoute from "./routes/contactRoute.js";
//Sayfa  Json
import cookieParser from "cookie-parser";
//JsonWebToken İçin
import {checkUser} from "./middlewares/authMiddleware.js";
//Hata Mesajları İçin
import flush from'connect-flash';
//Çevre Değişkenleri İçin(.env)
dotenv.config();
//Veritabanı Bağlantısı için
conn(); 
const app=express();
const port=process.env.PORT;
//Html De JavaScript Kodu Yazmak İçin Ejs
app.set('view engine','ejs');
//Static Dosyalara Ulaşmak İçin
app.use('/public', express.static('public'))
//Veri İçin
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser()); 
//Hata Mesajları İçin
app.use(flush()); 
//Cv İndirmek İçin
app.get("/dowland/file",(req,res)=>{
res.download("./public/Cv.pdf");
}); 

//Route Bölümü
//Tüm Get Methotlarında CheckUser Kontrol Et
app.use("*",checkUser);
app.use("/",pageRoute);
app.use("/",userRoute);
//İndex.js den action /users isteği gelirse contactRoute a git
app.use("/users",contactRoute);
//Port Çalıştırma
//``
app.listen(port||3000, () => {
    console.log(`Server Şu Portta Çalışıyor: ${port}`);
 });