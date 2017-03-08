var environment = process.env.NODE_ENV || 'development'
var development = require('./knexfile.js')[environment]
var knex = require('knex')(development)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getInterests: getInterests,
  insertUser: insertUser
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

function insertUser (request) {
  var user = {
    name:request.body.name,
    email:request.body.email
  }
  var profile = {
    interests:request.body.interests,
    location:request.body.location,
    phone_number:request.body.phone_number
  }
  knex('users').insert(user)
    .then(function (lastId){
      profile.users_id = lastId[0]
        knex('profile').insert(profile)
          .then()
    })

}
