const express = require("express");
const projects = require("./projects-model");
const router = express.Router();

//requires resource_name, description optional
router.post("/resources", (req, res) => {
  projects
    .addResource(req.body)
    .then(resource => {
      res.status(201).json({
        message: "Resource created",
        resource: {
          id: resource[0],
          resource_name: req.body.resource_name,
          description: req.body.description
        }
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not add resource " + err.message });
    });
});

router.get("/resources", (req, res) => {
  projects
    .getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not get resources: " + err.message });
    });
});

router.post("/projects", (req, res) => {
  projects
    .addProject(req.body)
    .then(project => {
      res.status(201).json({
        message: "Project created",
        project: {
          id: project[0],
          project_name: req.body.project_name,
          description: req.body.description,
          completed: req.body.completed
        }
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Cannot create project: " + err.message });
    });
});

router.get("/projects", (req, res) => {
  projects
    .getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Cannot get projects: " + err.message });
    });
});

router.post("/tasks", (req, res) => {
    projects.addTask(req.body)
    .then(task => {
        res.status(201).json({message: "Task created!", task: {task_id: task[0], description: req.body.description, completed: req.body.completed}})
    })
    .catch(err => {
        res.status(500).json({message: "Cannot add tasks: " + err.message})
    })
})

module.exports = router;
