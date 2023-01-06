const express = require("express")
const router = express.Router()

const { getAllProduits, getProduitById } = require("../model/product")

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

module.exports = router