
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "Lambda School Student", description: 'A soon to be hired developer'},
        {resource_name: "MacBook Pro", description: "An overly expensive laptop"},
        {resource_name: "TK", description: "Lambda School's training kit"},
        {resource_name: "VSCode", description: "A tool for editing code"},
        {resource_name: "SQLite Studio", description: "A tool for creating databases"},
      ]);
    });
};
