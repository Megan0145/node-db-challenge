exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments("project_id");
      tbl.string("project_name", 128).notNullable();
      tbl.string("description", 128);
      tbl.boolean("completed").defaultTo(false);
    })

    .createTable("resources", tbl => {
      tbl.increments("resource_id");
      tbl
        .string("resource_name", 128)
        .notNullable()
        .unique();
      tbl.string("description", 128);
    })

    .createTable("project_resources", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("tasks", tbl => {
      tbl.increments("task_id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("description", 128).notNullable();
      tbl.string("notes", 128);
      tbl.boolean("completed").defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks");
};
