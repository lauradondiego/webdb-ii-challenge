exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    // id column, primary key, autoincrement, integer
    tbl.increments();
    // VIN column
    tbl.string("vin");
    // MAKE column
    tbl.string("make");
    // MODEL column
    tbl.string("model");
    // MILEAGE column
    tbl.integer("mileage");
    // TRANSMISSION TYPE column
    tbl.string("type");
    // STATUS column
    tbl.string("status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
