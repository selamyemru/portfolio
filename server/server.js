import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import project from './route/project.js';
import skill from './route/skill.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', project);
app.use('/api', skill);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
