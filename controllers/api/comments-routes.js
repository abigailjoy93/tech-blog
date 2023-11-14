const router = require('express').Router();
const {
    Users,
    blogs,
    Comments
} = require('../../models');
const withAuth = require('../../utils/auth');


//Get all comments
router.get("/", (req, res) => {
    Comments.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Create a comment
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comments.create({
                content: req.body.content,
                username: req.body.username,
                date: req.session.date
            })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});


module.exports = router;