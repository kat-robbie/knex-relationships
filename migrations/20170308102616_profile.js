
exports.up = function(knex, Promise) {
   return Promise.all([
    knex.schema.createTableIfNotExists('profile', function (table) {
      table.integer('users_id')
      table.string('interests');
      table.string('location');
      table.integer('phone_number')
    })
  ])
};

exports.down = function(knex, Promise) {
   return Promise.all([
    knex.schema..dropTableIfExists('profile')
  ])
};
