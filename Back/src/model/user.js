const db = require("../db/db");
const jwt = require('jsonwebtoken');

function connectUser(email, password) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM user WHERE email=?", email, (err, res) => {
      if (err) {
        rej(err)
      } 
      if (res?.password == password) {
        const token = jwt.sign({ email: res.email, role: res.role }, 'ma super clé');
        resolve({ token, id: res.id, role: res.role })
      }
      rej({ mess: "utilisateur ou mot de passe incorrect" })
    })
  })
}
function newUser(email, password, role) {
  return new Promise((resolve, rej) => {
    db.run("INSERT INTO user (email,password,role) VALUES(?,?,?)", [email, password, role], function (err, res) {
      if (err) {
        rej("Erreur à l'ajout:" + err)
      }
      resolve({ mess: "utilisateur ajouté", id: this.lastID })
    })
  })
}

// function modifyUser(email, password, role) {

// }

function deleteUser(email) {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM user WHERE email=?", email, (err) => {
      if (err) {
        reject("Erreur à la suppression de l'utilisateur\n" + err)
      }
      resolve({ message: `Utilisateur ${email} supprimé`})
    })
  })
}

module.exports = {
  connectUser,
  newUser,
  deleteUser
}