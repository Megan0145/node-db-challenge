//insert into resources(resource_name, description) values("Lecturer", "Great teacher")
//select * from resources
//insert into projects(project_name, description, completed) values("Finish sprint", "Polish everything up", 0)
//select * from projects
//insert into tasks(project_id, description, completed) values(1, "Go back over past projects", 0)
//select * from tasks
const db = require("../data/dbConfig");

module.exports = {
    addResource,
    getResources
}

function addResource(resource){
    return db("resources")
    .insert(resource)
}

function getResources() {
    return db("resources")
}