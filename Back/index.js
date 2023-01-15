const express = require('express')
const cors = require('cors')

const productRoutes = require('./src/routes/product')
const userRoutes = require("./src/routes/user")
const commandeRouter = require('./src/routes/commande')
const ligneCommandeRouter = require('./src/routes/ligne_commande')

const app = express()

app.use(express.json())
app.use(cors())

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173"),
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"),
//   next()
// })

app.use('/user', userRoutes)

app.use('/product', productRoutes)
app.use('/commande', commandeRouter)
app.use('/ligne_commande', ligneCommandeRouter)

app.listen(3000)