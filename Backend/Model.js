import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  Poem_Text: String,
  User_Id: String,
}, { timestamps: true });

export default mongoose.model('Item', itemSchema);
