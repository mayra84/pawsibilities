const { ConnectContactLens } = require('aws-sdk');
const express = require('express');
const checkAuth = require('../../checkAuth');
const router = express.Router();
const db = require('../../models')
const upload = require('../../upload')

//create
router.post('/register', checkAuth, upload.array('image'), async (req, res) => {
    //check body for req'd info
    if (!req.body.name || !req.body.breed || !req.body.weight || !req.body.size || !req.body.age || !req.body.temperament || !req.body.coat || !req.body.bio || !req.files?.length) {
        res.status(400).json({ error: 'please include all required fields' })
        return
    }

    //check if dog already exists
    const dogs = await db.Dog.findAll({
        where: {
            UserId: req.session.user.id,
            name: req.body.name
        }
    })

    if (dogs.length) {
        res.status(400).json({
            error: `${req.body.name} already exists`
        })
        return
    }
    // console.log(req.files)
    // [
    //     {
    //       fieldname: 'image',
    //       originalname: 'baby_dalton.JPG',
    //       encoding: '7bit',
    //       mimetype: 'image/jpeg',
    //       size: 719236,
    //       bucket: 'pawsibilities',
    //       key: 'baby_dalton.JPG1646331053181',
    //       acl: 'private',
    //       contentType: 'application/octet-stream',
    //       contentDisposition: null,
    //       contentEncoding: null,
    //       storageClass: 'STANDARD',
    //       serverSideEncryption: null,
    //       metadata: null,
    //       location: 'https://pawsibilities.s3.us-east-2.amazonaws.com/baby_dalton.JPG1646331053181',
    //       etag: '"10e56c8bbcfc794b5650b292ef657b1d"',
    //       versionId: undefined
    //     }
    //   ]
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
        UserId: req.session.user.id,
        Image: {
            name: req.files[0].originalname,
            location: req.files[0].location,
            data: req.files[0]
        }
    }, {
        include: db.Image
    })

    //send response
    if (dog) {
        res.status(201).json(dog)
        return
    }
    res.status(500).json({
        error: 'Oops! something went wrong'
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
    // dog.destroyHealth

    //if no dog, 404
    if (!dog) {
        res.status(404).json({ error: 'could not find dog with that name' })
        return
    }
    //delete movie
    const logs = await db.Health.findAll({
        where: {
            DogId: req.params.id
        }
    })

    //Health.destroy({
    //     where: 
    // }
    // )
    for (let i = 0; i < logs.length; i++) {
        //*cries*
        await logs[i].destroy()
    }
    const deleted = await dog.destroy()

    //send response
    res.status(204).json({ success: 'dog successfully deleted' })
})

//read
router.get('/', checkAuth, async (req, res) => {
    //find all dogs for user
    const dogs = await db.Dog.findAll({
        where: {
            UserId: req.session.user.id,
        },
        include: db.Image
    })
    res.json(dogs)
})

//update maybe later
router.put('/:id', checkAuth, async (req, res, next) => {
    const dog = await db.Dog.findOne({
        where: {
            UserId: req.session.user.id,
            id: req.params.id
        }
    })

    if (!dog) {
        res.status(404).json({ error: 'could not find dog with that name' })
        return
    }

    dog.set({
        name: req.body.name,
        breed: req.body.breed,
        weight: req.body.weight,
        size: req.body.size,
        age: req.body.age,
        temperament: req.body.temperament,
        coat: req.body.coat,
        bio: req.body.bio,
        UserId: req.session.user.id,
        //create new image in db
        //dog.addImage(image.id)
        Image: {
            name: req.files[0].originalname,
            location: req.files[0].location,
            data: req.files[0]
        }
    }, {
        include: db.Image
    })
    await dog.save();

    //send response
    res.status(200).json({ success: 'dog successfully updated!' })
})




module.exports = router; 
