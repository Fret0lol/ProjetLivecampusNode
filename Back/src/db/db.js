const sqlite = require('sqlite3').verbose()

const db = new sqlite.Database('./src/db/db.db', (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the database')
})

module.exports = db