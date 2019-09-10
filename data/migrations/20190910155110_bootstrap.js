exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    // id column, primary key, autoincrement, integer
    tbl.increments();
    // VIN column
    tbl
      .string("vin")
      .unique()
      .notNullable();
    // MAKE column
    tbl.string("make").notNullable();
    // MODEL column
    tbl.string("model").notNullable();
    // MILEAGE column
    tbl.integer("mileage").notNullable();
    // TRANSMISSION TYPE column
    tbl.string("type");
    // STATUS column
    tbl.string("status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
