import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
  mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  console.log("DB Connected")
    }
