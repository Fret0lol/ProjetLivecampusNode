const express = require('express')
const router = express.Router()

const { getAllCommandes, getAllCommandesForUser, getAllCommandesForUserByStatut, getCommandeById, addCommande, updateCommande, deleteCommande } = require('../model/commande')

const { isAdminCheck, tokenCheck } = require('../middleware/token')

router.get('/',isAdminCheck, (req, res) => {
  getAllCommandes().then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.get('/user/:userid', tokenCheck, (req, res) => {
  getAllCommandesForUser(req.params.userid).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.get('/user/:userid/statut/:statut', tokenCheck, (req, res) => {
  getAllCommandesForUserByStatut(req.params.userid, req.params.statut).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.get('/:id', tokenCheck, (req, res) => {
  getCommandeById(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.post('/add', tokenCheck, (req, res) => {
  addCommande(req.body.date, req.body.statut, req.body.user_id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.put('/:id', tokenCheck, (req, res) => {
  updateCommande(req.body.id, req.body.statut).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.delete('/delete', isAdminCheck, (req, res) => {
  deleteCommande(req.body.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})


module.exports = router