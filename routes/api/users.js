//@ts-check
const express = require('express');
const router = express.Router();
const db = require('../../models')
const models = require('../../models')
const bcrypt = require('bcrypt');
const user = require('../../models/user');

/* GET users listing. */
router.get('/', async (req, res) => {
  await models.User.findAll(
  //   {
  //   include: [models.email, models.password, models.zipcode]
  // }
  )
    .then(users => {
      console.log(users)
      res.json(users)
    })
    .catch(e => {
      console.error(e)
      res.status(500).json({
        error: 'Server Error'
      })
    })
  });

router.post('/register', async function (req, res, next) {
  //accept email, accept password

  //is email and password present on body

  if (!req.body.email || !req.body.password || !req.body.zipcode) {
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
    password: hash,
    zipcode: req.body.zipcode
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
  // @ts-ignore
  req.session.user = user


  //send response
  res.json(user)

});

router.get('/logout', function(req, res) {
  // @ts-ignore
  req.session.user = null;
  res.json({
    success: 'successfully logged out'
  })
})

router.put("/zipcode", async function(req,res) {
  if (
    // !req.body.email ||
    //  !req.body.password ||
     !req.body.zipcode) {
    res.status(400).json({
      error: 'please include all required fields'
    })
    return
  }

  //hash password
  // const hash2 = await bcrypt.hash(req.body.zipcode, 10)
  // const hash = await bcrypt.hash(req.body.password, 10)

  //store new user in db
  const user = await db.User.update({
    // email: req.body.email,
    // password: hash,
    zipcode: req.body.zipcode
  }, 
  {
    where:{
      // @ts-ignore
      id: req.session.user.id
    }
  })

  //send response
  if (user) {
    res.status(201).json(user.zipcode)
    return
  }
  res.status(500).json({
    error: 'oops! something went wrong'
  })
})


module.exports = router;
