function checkAuth(req, res, next) {
    if (!req.session.user) {
        res.status(401).json({
            error: 'please log in'
        })
    } else {
        next()
    }
}

module.exports = checkAuth