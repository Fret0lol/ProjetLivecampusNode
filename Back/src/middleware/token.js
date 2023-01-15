const jwt = require('jsonwebtoken')

function tokenCheck(req, res, next) {
  let token = ''
  console.log(req.headers['x-access-token'])
  if (req.headers['x-access-token']) {
    token = req.headers['x-access-token']
    const DECONDED = jwt.verify(token, 'ma super clé')
    console.log(DECONDED)
    if (DECONDED.email) {
      req.user = { email: DECONDED.user, role: DECONDED.role }
      next()
    } else {
      res.status(401).json({message: 'Droits restreints'})
    }
  } else {
    res.status(401).json({message: 'Droits restreints'})
  }
}

function isAdminCheck(req, res, next) {
  if (req.headers['x-access-token']) {
    const DECONDED = jwt.verify(req.headers['x-access-token'], 'ma super clé')
    if (DECONDED.role === 'admin') {
      next()
    } else {
      res.status(401).json({message: 'Droits restreints'})
    }
  } else {
    res.status(401).json({message: 'Droits restreints'})
  }
}

module.exports = {
  tokenCheck,
  isAdminCheck
}