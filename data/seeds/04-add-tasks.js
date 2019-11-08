
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: "Review TK", notes: "", completed: true},
        {project_id: 1, description: "Practice on W3Schools", notes: "Use Try Editor to perform queries on pre-populated db", completed: true},
        
        {project_id: 2, description: "Review Knex Docs", notes: "Look at migrations & seeds section", completed: false},
        {project_id: 2, description: "Download SQLite Studio", notes: "Will be used during class", completed: true},

        {project_id: 3, description: "Research SQL joins & Knex joins", notes: "Look back at previous projects, many have Knex joins present", completed: false},
        {project_id: 3, description: "Practice querying db on SQLite Studio", notes: "", completed: true},

        {project_id: 4, description: "Research Normalizing the model", notes: "Look out for 1NF, 2NF etc", completed: true},

        {project_id: 5, description: "Research bcrypt.js", notes: "", completed: true},
        {project_id: 5, description: "Research hashing", notes: "Important for password security", completed: false},
      ]);
    });
};
