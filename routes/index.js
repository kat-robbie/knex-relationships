var express = require('express')
var db = require('../db')

module.exports = {
  get: get,
  showProfile: showProfile,
  showForm: showForm,
  createUser: createUser
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
      res.render('profile.hbs', { returnedUser: returnedUser })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  }

function showForm (req, res) {
  res.render('form.hbs')
}

function createUser (req, res) {
  db.insertUser(req)
}
