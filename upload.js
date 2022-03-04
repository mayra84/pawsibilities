const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: 'us-east-2'
});

const s3 = new aws.S3();


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'pawsibilities',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname + Date.now()); //use Date.now() for unique file keys
        }
    })
});

module.exports = upload 
