const db = require('../db/db')

function getAllCommandes() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM commande", (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function getAllCommandesForUser(user_id) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM commande WHERE user_id=?", user_id, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function getAllCommandesForUserByStatut(user_id, statut) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM commande WHERE user_id=? AND statut=?", [user_id, statut], (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function getCommandeById(id) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM commande WHERE id=?", id, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function addCommande(date, statut, user_id) {
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO commande (date, statut, user_id) VALUES(?,?,?)", [date, statut, user_id], (err) => {
      if (err) {
        reject(err)
      }
      resolve({ message: "Commande ajouté", id: this.lastID })
    })
  })
}

function updateCommande(id, statut) {
  return new Promise((resolve, reject) => {
    db.run("UPDATE commande SET statut=? WHERE id=?", [statut, id], (err) => {
      if (err) {
        reject(err)
      }
      resolve({ message: "Commande modifié" })
    })
  })
}

function deleteCommande(id) {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM commande WHERE id=?", id, (err) => {
      if (err) {
        reject(err)
      }
      resolve({ mess: "Commande supprimé" })
    })
  })
}

module.exports = {
  getAllCommandes,
  getAllCommandesForUser,
  getCommandeById,
  getAllCommandesForUserByStatut,
  addCommande,
  updateCommande,
  deleteCommande
}