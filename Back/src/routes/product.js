const express = require("express")
const router = express.Router()

const { tokenCheck, isAdminCheck } = require('../middleware/token')

const { getAllProduits, getProduitById, addProduct, updateProduit, deleteProduit } = require("../model/product")

router.get('/', (req, res) => {
  getAllProduits().then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.get('/:id', (req, res) => {
  getProduitById(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  }) 
})

router.post('/', isAdminCheck, (req, res) => {
  addProduct(req.body.nom, req.body.description, req.body.prix, req.body.photo)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.put('/:id', isAdminCheck, (req, res) => {
  updateProduit(req.body.id, req.body.nom, req.body.description, req.body.prix, req.body.photo)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.delete('/:id', isAdminCheck, (req, res) => {
  deleteProduit(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})
module.exports = router