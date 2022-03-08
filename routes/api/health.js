
const { longStackTraces } = require('bluebird');
const express = require('express');
const { check } = require('yargs');
const checkAuth = require('../../checkAuth');
const router = express.Router();
const db = require('../../models')
const { Op } = require("sequelize");
const upload = require('../../upload');

//create
router.post('/log/:id', checkAuth, upload.array('image'), async (req, res) => {

    //when on home page
    //get all dogs for that user 
    // const logs = await db.Health.findAll({
    //     where: {
    //         DogId: req.session.user.id.dog.id
    //     }
    // })
    
    //check body for required info
    if (!req.body.mood || !req.body.physical || !req.body.activity) {
        res.status(400).json({ error: 'Please include all required fields'})
        return
    }

    // check if log for specific dog already exists
    const dayStart = new Date()
    dayStart.setHours(0, 0, 0, 0)
    const dayEnd = new Date()
    dayEnd.setHours(23, 59, 59, 999)
    const logs = await db.Health.findAll({
        where: {
            DogId: req.params.id,
            createdAt: {
                [Op.between] : [dayStart, dayEnd]
            }
        }
    })

    if (logs.length) {
        res.status(400).json({
            error: `A survey for ${dayStart.toLocaleDateString()} has already been created`            
        })
        return
    }

    const dog = await db.Dog.findOne({
        where: {
            UserId: req.session.user.id,
            id: req.params.id
        }
    })

    if (!dog) {
        res.status(404).json({
            error: 'Dog not found'
        })
        return
    }


    const mood = typeof req.body.mood === "string" ? req.body.mood.split(',') : req.body.mood
    const physical = typeof req.body.physical === "string" ? req.body.physical.split(',') : req.body.physical
    const activity = typeof req.body.activity === "string" ? req.body.activity.split(',') : req.body.activity

    //create new item
    //magic method 
    const log = await dog.createHealth({
        mood,
        physical,
        activity,
        notes: req.body.notes,
        Images: [{
            name: req.files[0]?.originalname, location: req.files[0]?.location, data: req.files[0]
        }]
        // Image: {
        //     name: req.files[0].originalname,
        //     location: req.files[0].location,
        //     data: req.files[0]
        // }
        // ImageId: req.body.image.id
    }, {
        include: db.Image
        // include: db.Image
    })
    
    //send response
    if (log) {
        res.status(201).json({
            success: 'Health has been successfully logged!'
        })
        return
    }
    res.status(500).json({
        error: 'Oops! Something went wrong.'
    })

})

//delete
router.delete('/:id', checkAuth, async (req, res) => {
    const log = await db.Health.findOne({
        where: {
            // DogId: req.session.dog.id,
            id: req.params.id
        }
    })

    //if no log, 404
    if (!log) {
        res.status(404).json({ error: 'Could not find log for that date'})
        return
    }
    //delete log
    const deleted = await log.destroy()

    res.status(204).json({ success: 'Log successfully deleted'})
})


//read

//INCLUDE: DB.IMAGE????????????

router.get('/', checkAuth, async (req, res) => {
    //find all logs for dog
    const health = await db.Health.findAll({
        //nested where
        
        include: [{
            model: db.Dog,
            where: {
                UserId: req.session.user.id
            },
        },
        {
            model: db.Image
        }]
       
    })
    res.json(health)
})

// router.get('/', checkAuth, async (req, res) => {
//     //find all dogs for user
//    const dogs = await db.Dog.findAll({
//         where: {
//             UserId: req.session.user.id,
//         }
//     })
//     res.json(dogs)
// })

module.exports = router 

