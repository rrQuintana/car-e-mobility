const User = require('../models/user')
const logger = require('./logger')
const jwt = require('jsonwebtoken')

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const userExtractor = async (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  } else {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  request.user = await User.findById(decodedToken.id);

  if (!request.user) {
    return response.status(404).json({ error: 'User not found' })
  }

  next()
}

const permissionChecker = async (request, response, next) => {
  const authorization = request.get('authorization')
  let token

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    token = authorization.substring(7)
  } else {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const decodedToken = jwt.verify(token, process.env.SECRET)

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id);

  if (!user) {
    return response.status(404).json({ error: 'User not found' })
  }

  if (user.roles.length !== 0) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  next()
}

const errorHandler = (err, req, res, next) => { // eslint-disable-line
  logger.error(err);

  if (err.message === 'access denied') {
    return res.status(403).json({ error: err.message });
  } else {
    return res.status(500).json({ error: err.message });
  }
}

module.exports = {
  unknownEndpoint,
  userExtractor,
  permissionChecker,
  errorHandler
}