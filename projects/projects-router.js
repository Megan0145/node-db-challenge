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
    projects.addProject(req.body)
    .then(project => {
        res.status(201).json({
            message: "Project created",
            project: {
              id: project[0],
              project_name: req.body.project_name,
              description: req.body.description,
              completed: req.body.completed
            }
          })
    })
    .catch(err => {
        res.status(500).json({message: "Cannot create project: " + err.message})
    })
})

module.exports = router;
