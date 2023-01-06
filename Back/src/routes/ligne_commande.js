const express = require('express')
const router = express.Router()

const { getAllLigneForCommande, addLigneCommande, updateLigneCommande, deleteLigneCommande } = require("../model/ligne_commande")

const tokenCheck = require('../middleware/token')

router.get('/:commande_id', tokenCheck, (req, res) => {
  getAllLigneForCommande(req.params.commande_id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.post('/add', (req, res) => {
  addLigneCommande(req.body.commande_id, req.body.product_id, req.body.quantite).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.put('/update', (req, res) => {
  updateLigneCommande(req.body.commande_id, req.body.product_id, req.body.quantite).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.delete('/delete', (req, res) => {
  deleteLigneCommande(req.body.commande_id, req.body.product_id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router