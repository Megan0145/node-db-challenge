//insert into resources(resource_name, description) values("Lecturer", "Great teacher")
//select * from resources
//insert into projects(project_name, description, completed) values("Finish sprint", "Polish everything up", 0)
//select * from projects
//insert into tasks(project_id, description, completed) values(1, "Go back over past projects", 0)
//select * from tasks
const db = require("../data/dbConfig");

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}

function addResource(resource) {
    return db("resources")
    .insert(resource)
}

function getResources() {
    return db("resources")
}

function addProject(project) {
    return db("projects")
    .insert(project)
}

function getProjects() {
    return db("projects")
}

function addTask(task) {
    return db("tasks")
    .insert(task)
}

//select p.project_id, p.project_name, t.task_id, t.description, t.notes 
// from tasks as t
// join projects as p
// on t.project_id =  p.project_id
// where p.project_id = 1

function getTasks(id) {
    return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select("p.project_id", "p.project_name", "t.task_id", "t.description", "t.notes")
    .where({"p.project_id" : id})
}