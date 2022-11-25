//Mail İşlemeri
import nodemailer from "nodemailer";
//İndex Sayfası
const getIndexPage= async(req,res)=>{
 res.render('index');
  }
//Login Sayfası
const getLoginPage= async(req,res)=>{
 res.render('login',{emailPasswordError:''});
}
//Register Sayfası
const getRegisterPage= async(req,res)=>{
res.render('register');
 }
 //Logout Sayfası
const getLogout=(req,res)=>{
    //Cookideki Tokeni Yenliyor 1 Saniyede 
   res.cookie('jwt',' ',{
    maxAge:1,
   });
   res.redirect("/");
};

//Payment Sayfası
const getPaymentPage= async(req,res)=>{
  res.render('payment');
   }
 //404page Sayfası
const get404Page= async(req,res)=>{
  res.render('404');
   }

//Başkta Yerde Kullanmak İçin Export
 export {getIndexPage,getRegisterPage,getLoginPage,getLogout,getPaymentPage,get404Page};    