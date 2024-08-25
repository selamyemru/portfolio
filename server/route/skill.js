import express from 'express'
import { getSkills } from '../controller/skill.js';
const router = express.Router();

router.get('/skills', getSkills);

export default router;
