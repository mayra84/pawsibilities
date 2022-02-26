const express = require('express');
const checkAuth = require('../../checkAuth');
const router = express.Router();
const db = require('../../models')


//create
router.post('/register', checkAuth, async (req, res) => {
    //check body for req'd info
    if (!req.body.name || !req.body.breed || !req.body.weight || !req.body.size || !req.body.age || !req.body.temperament || !req.body.coat || !req.body.bio) {
        res.status(400).json({ error: 'please include all required fields' })
    }

    //check if dog already exists
    const dogs = await db.Dog.findAll({
        where: {
            name: req.body.name
        }
    })

    if (dogs.length) {
        res.status(400).json({
            error: `dog ${req.body.name} already exists`
        })
        return
    }

    //create new item
    const dog = await db.Dog.create({
        name: req.body.name,
        breed: req.body.breed,
        weight: req.body.weight,
        size: req.body.size,
        age: req.body.age,
        temperament: req.body.temperament,
        coat: req.body.coat,
        bio: req.body.bio,
        UserId: req.session.user.id
    })

    //send response
    if (dog) {
        res.status(201).json(dog)
        return
    }
    res.status(500).json({
        error: 'oops! something went wrong'
    })

})

//delete
router.delete('/:id', checkAuth, async (req, res) => {
    //check db for dog with id for current user
    const dog = await db.Dog.findOne({
        where: {
            UserId: req.session.user.id,
            id: req.params.id
        }
    })
    
    //if no dog, 404
    if (!dog) {
        res.status(404).json({ error: 'could not find dog with that name'})
        return
    }
    //delete movie
    const deleted = await dog.destroy()

    //send response
    res.status(204).json({ success: 'dog successfully deleted'})
})

//read
router.get('/', checkAuth, async (req, res) => {
    //find all dogs for user
   const dogs = await db.Dog.findAll({
        where: {
            UserId: req.session.user.id,
        }
    })
    res.json(dogs)
})

//update maybe later


module.exports = router; 
