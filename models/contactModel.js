//Veritabanı İçin
import mongoose from "mongoose";


const {Schema}=mongoose;

const contactUserSchema= new Schema({
name:{
    type:String,
},
email:{
    type:String,
},
message:{
    type:String,
},
},
{
    timestamps:true,
}
);


const ContactUser=mongoose.model("ContactUser",contactUserSchema);
//Modeli Export Etme
export default ContactUser;
