import Project from "../Model/project.js";
// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new project
export const createProject = async (req, res) => {
  try {
    const { title, description, image, liveUrl, githubUrl, technologies } = req.body;
    const newProject = new Project({ title, description, image, liveUrl, githubUrl, technologies });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
