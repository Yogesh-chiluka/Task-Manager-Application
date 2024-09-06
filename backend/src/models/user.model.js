const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
 
const userSchema = new mongoose.Schema(
    {
        googleId: String,
        email: { 
            type: String, 
            unique: true,
            required: true,
            lowercase: true,
        },
        password: {
            type:String,
            required:[true,'Password is required']
        },
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
    }
);
 
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
