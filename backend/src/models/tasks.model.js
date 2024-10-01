import mongoose from "mongoose";
 
const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: { 
          type: String,
          required: true,
          lowercase: true,
        },
    },
    {
      timestamps:true
});
 

 
export const Task = mongoose.model('Task', taskSchema);
