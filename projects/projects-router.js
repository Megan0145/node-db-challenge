const express = require("express");
const projects = require("./projects-model");
const router = express.Router();

//requires resource_name, description optional
router.post("/resources", (req, res) => {
  projects
    .addResource(req.body)
    .then(resource => {
      res
        .status(201)
        .json({
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

module.exports = router;
