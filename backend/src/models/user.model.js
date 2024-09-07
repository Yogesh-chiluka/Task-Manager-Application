import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

 
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: { 
          type: String, 
          unique: true,
          required: true,
          lowercase: true,
        },
        password: {
          type:String,
        },
        googleId:{ type: String},
        picture: { type: String},
    },
    {
      timestamps:true
});
 
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
 
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};
 
export const User = mongoose.model('User', userSchema);
