var express = require('express')
var db = require('../db')

module.exports = {
  get: get,
  showProfile: showProfile
}

function get (req, res) {
  db.getUsers()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function showProfile (req, res) {
  db.getInterests(req.params.id)
    .then(function (returnedUser) {
      console.log(returnedUser);
      res.render('profile.hbs', { returnedUser: returnedUser })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

  }
