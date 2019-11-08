exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Learn about Relational DBs",
          description: "Learn about RDBs & basics of SQL and Knex",
          completed: true
        },
        {
          project_name: "Learn about DB Schema Design",
          description:
            "Cover DBMS, SQLite Studio, Primary & Foreign Keys, Migrations & Seeds",
          completed: true
        },
        {
          project_name: "Learn about Multi-Table Queries",
          description: "Cover SQL joins, Aggregate functions, Knex Joins",
          completed: false
        },
        {
          project_name: "Learn about Data Modeling",
          description:
            "Cover Normalizing the model, best prectices in db design",
          completed: false
        },
        {
          project_name: "Learn about Authentication & Testing",
          description:
            "Cover password security, how to hash passwords, verify using bcrypt.js",
          completed: false
        },
        {
          project_name: "Learn about Sessions & Cookies",
          description: "Cover in-memory sessions etc",
          completed: false
        }
      ]);
    });
};
