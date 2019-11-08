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

router.post("/projects/:id/resources", (req, res) => {
  projects
    .addResource(req.body)
    .then(resource => {
      projects
        .addResourceToProject({
          project_id: req.params.id,
          resource_id: resource[0]
        })
        .then(projectresource => {
          res
            .status(201)
            .json({
              message: "Created successfully",
              data: { project_id: req.params.id, resource_id: resource[0] }
            });
        })
        .catch(err => {
          res
            .status(500)
            .json({
              message: "Could not add resource to project: " + err.message
            });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not add resource: " + err.message });
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

router.get("/projects/:id/resources", (req, res) => {
  projects
    .getResourcesByProjectId(req.params.id)
    .then(resources => {
      res.json(resources);
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
      res.json(
        projects.map(p => {
          return {
            project_id: p.project_id,
            project_name: p.project_name,
            description: p.description,
            completed: p.completed === 1 ? true : false
          };
        })
      );
    })
    .catch(err => {
      res.status(500).json({ message: "Cannot get projects: " + err.message });
    });
});

router.post("/projects/:id/tasks", (req, res) => {
  projects
    .addTask({
      project_id: req.params.id,
      description: req.body.description,
      notes: req.body.notes,
      completed: req.body.completed ? req.body.completed : false
    })
    .then(task => {
      res.status(201).json({
        message: "Task created!",
        task: {
          task_id: task[0],
          description: req.body.description,
          completed: req.body.completed ? req.body.completed : false
        }
      });
    })
    .catch(err => {
      res.status(500).json({ message: "Cannot add tasks: " + err.message });
    });
});

router.get("/projects/:id/tasks", (req, res) => {
  projects
    .getTasks(req.params.id)
    .then(tasks => {
      res.json(
        tasks.map(t => {
          return {
            task_id: t.task_id,
            project_id: t.project_id,
            project_name: t.project_name,
            description: t.description,
            notes: t.notes,
            completed: t.completed === 1 ? true : false
          };
        })
      );
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Cannot get tasks for project: " + err.message });
    });
});
module.exports = router;
