// defining the route
const router = require("express").Router();
const { 
  blogs,
  Comments,
  Users
 } = require("../../models");
const withAuth = require('../../utils/auth');


// Get all blogs
router.get('/', (req,res) => {
  blogs.findAll({
    attributes: ['id', 'blogTitle','blogContents','blogAuthor', 'blogDate'],
    include: [{
      model: Users,
      attributes: ["username"],
    },
    {
      model: Comments,
      attributes: ['id','username','content','date'],
      include: {
        model: Users,
        attributes: ['username'],
      },
    },
  ],

})
.then((dbPostData) => res.json(dbPostData))
.catch((err) => {
  console.log(err);
  res.status(500).json(err);
});
});

// Route to get a single blog
router.get("/:id", (req,res) => {
  blogs.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id','blogTitle','blogContents','blogAuthor','blogDate'],
      include: [{
        model: Users,
        attributes: ["username"],
      },
      {
        model: Comments,
        attributes: ['id','username','content','date'],
        include: {
          model: Users,
          attributes: ['username'],
        },
      },
    ],
  })
  .then((dbPostData) => {
    if (!dbPostData) {
      res.status(404).json({
        message: "Does not exist",
      });
      return;
    }
    res.json(dbPostData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Route for creating blogs
router.post("/", withAuth, (req, res) => {
  console.log('creating...');
  blogs.create({ 
        blogTitle: req.body.blogTitle,
        blogContents: req.body.blogContents,
        blogAuthor: req.body.blogAuthor,
        blogDate: req.body.blogDate,
      })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    });

// Route for updated exisiting blogs
router.put("/:id", withAuth, (req, res) => {
  blogs.update({
      blogTitle: req.body.blogTitle,
      blogContents: req.body.blogContents,
      blogAuthor: req.body.blogAuthor,
      blogDate: req.body.blogDate,
      },
      {
        where: {
          id: req.params.id,
        },
      })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({
            message: "No such post!"
          });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    });

// route to delete a blog
router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
          where: {
              id: req.params.id,
          },
      })
      .then((dbPostData) => {
          if (!dbPostData) {
              res.status(404).json({
                  message: "No post found with this id"
              });
              return;
          }
          res.json(dbPostData);
      })
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;
