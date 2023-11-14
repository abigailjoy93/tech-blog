// defining the route
const router = require("express").Router();
const Blogs = require("../models/blogs.js");
const Comments = require("../models/Comments.js");
const Users = require("../models/Users.js");

// Get route for getting exisiting blogs
router.get("/", (req, res) => {
  Blogs.findAll({
    attributes: [
      'id',
      'blogTitle',
      'blogContents',
      'blogAuthor',
      'blogDate'
    ],
    include: [{
      model: Comments,
      attributes: ['id', 'username','content','date'],
      include: {
        model: Users,
        attributes: ['username']
      }
    },
    {
      model: Users,
      attributes: ['username']
    }
  ]
  })
  .then(postBlogData => {
    const blogPosts = postBlogData.map(post => post.get({
      plain: true
    }));

    res.render('homepage', {
      blogPosts,
      loggedIn: req.session.loggedIn
    });  
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Get a speicifc blog
router.get("/blogs/:id", async (req, res) => {
  Blogs.findOne
({
  where: {
    id: req.params.id
  },
  attributes: [
    'id',
    'blogTitle',
    'blogContents',
    'blogAuthor',
    'blogDate',
  ],
  include: [{
    model: Comments,
    attributes: ['id','username', 'content','date'],
    include: {
      model: Users,
      attribute['username']
    }
  }, {
    model: Users,
    attributes: ['username']
  }
]
})
.then(dbPostData => {
  if (!dbPostData) {
    res.status(404).json({
      message: 'No such post'
    });
    return;
  }
  const blogPost = dbPostData.get({
    plain: true
  });

  res.render('single-post', {
    post,
    loggedIn: req.session.loggedIn
  });
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

router.get('/login', (req, res) => {
  if (req.session.logginIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('*', (req,res) => {
  res.status(404).send("Out of bounds!")
})

module.exports = router;
