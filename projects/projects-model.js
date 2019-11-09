const db = require("../data/dbConfig");

module.exports = {
  addProject,
  getProjects,
  addTask,
  getTasks,
  getResourcesByProjectId,
  addResourceToProject,
  getProjectById,
  addResource
};

function addResourceToProject(values) {
    return db("project_resources").insert(values)
}
function addResource(resource) {
    return db("resources").insert(resource);
  }
function addProject(project) {
  return db("projects").insert(project);
}

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
    return db("projects").where({"project_id" : id})
}

function addTask(task) {
  return db("tasks").insert(task);
}

function getTasks(id) {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "p.project_id",
      "p.project_name",
      "t.task_id",
      "t.description",
      "t.notes"
    )
    .where({ "p.project_id": id });
}

function getResourcesByProjectId(id) {
  return db("resources as r")
    .join("project_resources as pr", "r.resource_id", "pr.resource_id")
    .join("projects as p", "p.project_id", "pr.project_id")
    .select(
      "p.project_id",
      "p.project_name",
      "r.resource_id",
      "r.resource_name",
      "r.description as resource_description"
    )
    .where({ "p.project_id": id });
}
