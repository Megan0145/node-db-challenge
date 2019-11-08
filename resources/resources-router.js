const express = require("express");
const projects = require("./resources-model");
const router = express.Router();

router.post("/", (req, res) => {
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

router.get("/", (req, res) => {
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

module.exports = router;
