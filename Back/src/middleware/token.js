const jwt = require('jsonwebtoken')

function tokenCheck(req, res, next) {
  let token = ''
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1]
    const DECONDED = jwt.verify(token, 'ma super clé')
    console.log(DECONDED)
    if (DECONDED.user) {
      req.user = { email: DECONDED.user, role: DECONDED.role }
      next()
    } else {
      res.status(401).json({message: 'Droits restreints'})
    }
  } else {
    res.status(401).json({message: 'Droits restreints'})
  }
}

module.exports = tokenCheck