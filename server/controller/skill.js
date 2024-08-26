import Skill from "../model/skill.js";
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error });
  }
};



// Controller function to create a new skill
export const createSkill = async (req, res) => {
  try {
    const { name, icon } = req.body;

    if (!name || !icon) {
      return res.status(400).json({ message: "Name and icon are required" });
    }

    const newSkill = new Skill({
      name,
      icon
    });

    const savedSkill = await newSkill.save();

    return res.status(201).json({ skill: savedSkill });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create skill", error: error.message });
  }
};
