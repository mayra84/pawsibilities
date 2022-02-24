//@ts-check
const express = require('express');
const router = express.Router();
const db = require('../../models')
const bcrypt = require('bcrypt')

/* GET users listing. */
router.post('/register', async function (req, res, next) {
  //accept email, accept password

  //is email and password present on body

  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      error: 'please include all required fields'
    })
    return
  }

  //is email already taken
  const users = await db.User.findAll({
    where: {
      email: req.body.email
    }
  })

  if (users.length) {
    res.status(400).json({
      error: 'email already in use'
    })
    return
  }

  //hash password
  const hash = await bcrypt.hash(req.body.password, 10)

  //store new user in db
  const user = await db.User.create({
    email: req.body.email,
    password: hash
  })

  //send response
  if (user) {
    res.status(201).json(user.email)
    return
  }
  res.status(500).json({
    error: 'oops! something went wrong'
  })
});

router.post('/login', async function (req, res, next) {

  //check if email and password
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      error: 'please include all fields'
    })
    return 
  }

  //check for email in db
  const user =  await db.User.findOne({
    where: {
      email: req.body.email
    }
  })

  if (!user) {
    res.status(404).json({
      error: 'no user found'
    })
    return
  }

  //compare password in db
  const match = await bcrypt.compare(req.body.password, user.password)
  if(!match) {
    res.status(401).json({error: 'incorrect password'})
    return
  }

  //TODO: authorize session with checkAuth
  //send response
  res.json(user)

});

module.exports = router;
