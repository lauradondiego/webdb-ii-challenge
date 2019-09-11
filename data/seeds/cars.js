exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars") // <<<<<<<<<<<<<<<<<<<<<<change this
    .truncate() // resets the id primary key
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "1FVNY5Y90HP312888",
          make: "Audi",
          model: "a4",
          mileage: 2000,
          type: "automatic",
          status: "clean"
        },
        {
          vin: "4T1BG22K8VU176482",
          make: "BMW",
          model: "m5",
          mileage: 42000,
          type: "automatic",
          status: "salvage"
        },
        {
          vin: "JH4KA4531KC033525",
          make: "Mercedes",
          model: "CLA350",
          mileage: "21400",
          type: "manual",
          status: "clean"
        }
      ]);
    });
};
