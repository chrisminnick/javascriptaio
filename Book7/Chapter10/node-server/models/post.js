import mongoose from 'mongoose';

// Creating the post schema
const postSchema = mongoose.Schema({
  text: { type: String, required: true },
});

export default mongoose.model('Post', postSchema);
