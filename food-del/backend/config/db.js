import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://havietnguyen1904211:haviet1234@cluster0.71nuaws.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}

//havietnguyen1904211 //haviet1234
// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.