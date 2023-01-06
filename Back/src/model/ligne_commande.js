const db = require('../db/db')

function getAllLigneForCommande(commande_id) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM ligne_commande WHERE commande_id=?", commande_id, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function addLigneCommande(commande_id, product_id, quantite) {
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO ligne_commande (commande_id, product_id, quantite) VALUES(?,?,?)", [commande_id, product_id, quantite], (err) => {
      if (err) {
        reject(err)
      }
      resolve({ message: "Ligne de commande ajouté", id: this.lastID })
    })
  })
}

function updateLigneCommande(commande_id, product_id, quantite) {
  return new Promise((resolve, reject) => {
    db.run("UPDATE ligne_commande SET quantite=? WHERE commande_id=? AND product_id=?", [quantite, commande_id, product_id], (err) => {
      if (err) {
        reject(err)
      }
      resolve({ message: "Ligne de commande modifié" })
    })
  })
}

function deleteLigneCommande(commande_id, product_id) {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM ligne_commande WHERE commande_id=? AND product_id=?", [commande_id, product_id], (err) => {
      if (err) {
        reject(err)
      }
      resolve({ mess: "Ligne de commande supprimé" })
    })
  })
}

module.exports = {
  getAllLigneForCommande,
  addLigneCommande,
  updateLigneCommande,
  deleteLigneCommande
}