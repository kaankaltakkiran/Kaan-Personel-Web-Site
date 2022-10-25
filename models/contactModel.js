//Veritabanı İçin
import mongoose from "mongoose";


const {Schema}=mongoose;

const contactUserSchema= new Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
message:{
    type:String,
    required:true,
},
},
{
    timestamps:true,
}
);


const ContactUser=mongoose.model("ContactUser",contactUserSchema);
//Modeli Export Etme
export default ContactUser;
