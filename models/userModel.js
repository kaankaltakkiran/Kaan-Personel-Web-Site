//Veritabanı İçin
import mongoose from "mongoose";
//Şifre İçin Kriptolama
import bcrypt from "bcrypt";
//Hata Mesaji İçin
import validator from "validator";
//Schema Oluşturma
const {Schema}=mongoose;
//Şema Bilgileri
const userSchema= new Schema({
name:{
    type:String,
    required:[true,"İsim Girmek Zorunlu."],
    lowercase:true,
},
surname:{
    type:String,
    required:[true,"SoyadGirmek Zorunlu."],
    lowercase:true,
    
},
email:{
    type:String,
    required:[true,"Email Girmek Zorunlu."],
    unique:true,
     //Burda Email Mı Diye Kontrol Edip Mesaj Yolluyor
     validate:[validator.isEmail,"Email Doğru Değil."],
},
password:{
    type:String,
    required:[true,"Şifre Girmek Zorunlu."],
    unique:true,
     //Burda 4 Karakterden Az Giremezsin Uyarısı Veriliyor
    minLength:[4,"4 Karakterden Az Giremezsin."],
},
phonenumber:{
    type:String,
    required:[true,"Telefon Numarası Girmek Zorunlu."],
    unique:true,
    //Burda 11 Karakterden Az Giremezsin Uyarısı Veriliyor
    minLength:[11,"11 Karakterden Az Giremezsin."],
},
adress:{
    type:String,
    required:[true,"Adres Girmek Zorunlu."],
},
},
{
    timestamps:true,
}
);

//Şifre İçin Kriptolama
userSchema.pre("save",function(next){
    const user=this;
    bcrypt.hash(user.password,10,(err,hash)=>{
        user.password=hash;
        next();
    });
    });
//Modeli Oluşturma
const User=mongoose.model("User",userSchema);
//Modeli Export Etme
export default User;