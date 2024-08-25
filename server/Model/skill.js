// models/Skill.js
import  mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true } 
});

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
