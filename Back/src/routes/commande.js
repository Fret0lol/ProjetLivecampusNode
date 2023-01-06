const express = require('express')
const router = express.Router()

const { getAllCommandes, getAllCommandesForUser, getCommandeById, addCommande, updateCommande, deleteCommande } = require('../model/commande')

router.get('/', (req, res) => {
  getAllCommandes().then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.get('/user-id', (req, res) => {
  getAllCommandesForUser(req.body.user_id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.get('/id', (req, res) => {
  getCommandeById(req.body.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.post('/add', (req, res) => {
  addCommande(req.body.date, req.body.statut, req.body.user_id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.put('/update', (req, res) => {
  updateCommande(req.body.id, req.body.statut).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.delete('/delete', (req, res) => {
  deleteCommande(req.body.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})


module.exports = router