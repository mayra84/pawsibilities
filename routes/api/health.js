const { longStackTraces } = require('bluebird');
const express = require('express');
const { check } = require('yargs');
const checkAuth = require('../../checkAuth');
const router = express.Router();
const db = require('../../models')
const { Op } = require("sequelize");

//create
router.post('/log/:id', checkAuth, async (req, res) => {

    //how to make "notes" optional

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


    //HOW TO KEEP FROM DUPLICATING??

    // check if log already exists
    const dayStart = new Date()
    dayStart.setHours(0, 0, 0, 0)
    const dayEnd = new Date()
    dayEnd.setHours(23, 59, 59, 999)
    const logs = await db.Health.findAll({
        where: {
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


    //create new item
    //magic method 
    const log = await dog.createHealth({
        mood: req.body.mood,
        physical: req.body.physical,
        activity: req.body.activity,
        notes: req.body.notes,
    })
    
    //send response
    if (log) {
        res.status(201).json({
            success: 'Dalton\'s log for today has been successfully created!'
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
        res.status(404).json({ error: 'could not find log for that date'})
        return
    }
    //delete log
    const deleted = await log.destroy()

    res.status(204).json({ success: 'log successfully deleted'})
})

//read
router.get('/', checkAuth, async (req, res) => {
    //find all logs for dog
    const health = await db.Health.findAll({
        //nested where
        
        include: {
            model: db.Dog,
            where: {
                UserId: req.session.user.id
            },
        }
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
