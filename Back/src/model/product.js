const db = require("../db/db");

/**
 * Récupère tous les produits
 * @returns 
 */
function getAllProduits() {
  return new Promise((resolve, rej) => {
    db.all("SELECT * FROM product", (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}

/**
 * Récupère un seul produit via son id
 * @param {Number} id 
 * @returns 
 */
function getProduitById(id) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM product WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}

/**
 * 
 * @param {String} nom 
 * @param {String} desc 
 * @param {Number} prix 
 * @param {String} photo 
 * @returns 
 */
function addProduct(nom, desc, prix, photo) {
  return new Promise((resolve, rej) => {
    db.run("INSERT INTO product (nom,description,prix,photo) VALUES(?,?,?,?)", [nom, desc, prix, photo], function (err, res) {
      if (err) rej(err)
      resolve({ mess: "Produit ajouté", id: this.lastID })
    })
  })
}
function updateProduit(id, nom, desc, prix, photo) {
  return new Promise((resolve, rej) => {
    db.run("UPDATE product SET nom=?,description=?,prix=?,photo=? WHERE id=?", [nom, desc, prix, photo, id], (err, res) => {
      if (err) {
        rej(err)
      }
      resolve({ mess: "Produit modifié" })
    })
  })
}
function deleteProduit(id) {
  return new Promise((resolve, rej) => {
    db.run("DELETE FROM product WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Produit supprimé" })
    })
  })
}
module.exports = {
  getAllProduits,
  getProduitById,
  addProduct,
  updateProduit,
  deleteProduit
}