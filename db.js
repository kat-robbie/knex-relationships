var environment = process.env.NODE_ENV || 'development'
var development = require('./knexfile.js')[environment]
var knex = require('knex')(development)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getInterests: getInterests
}

function getUsers (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  var db = testDb || connection
  return db('users').where('id', id)
}

function getInterests(receivedId){
  var id = receivedId;
  return knex('users')
    .join('profile', 'users.id', '=', 'profile.users_id')
    .select('users.id', 'users.name', 'users.email', 'profile.interests', 'profile.location', 'profile.phone_number')
    .where('users.id',id)

}
