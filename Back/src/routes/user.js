const express = require('express')
const { connectUser, newUser, deleteUser } = require('../model/user')
const router = express.Router()

const { tokenCheck } = require('../middleware/token')

// Connection
router.post('/sign-in', (req, res) => {
  connectUser(req.body.email, req.body.password).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

// Inscription
router.post('/sign-up', (req, res) => {
  newUser(req.body.email, req.body.password, req.body.role || 'user').then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.put('/modify', (req, res) => {

})

router.delete('/delete', tokenCheck, (req, res) => {
  if (req.user.email !== req.body.email && req.user.role !== 'admin') {
    res.status(401).json('Droits restreints')
  }
  deleteUser(req.body.email).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router