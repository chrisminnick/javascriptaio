import mongoose from 'mongoose';

// Creating the user schema
const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
});
const userModel = mongoose.model('User', userSchema);

export default userModel;
