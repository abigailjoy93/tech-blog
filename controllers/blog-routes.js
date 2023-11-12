// defining the route
const router = require("express").Router();

const blogs = [
    {
        id: /* IMPORT DYNAMICALLY */,
        blog_title: /* IMPORT DYNAMICALLY */,
        blog_author: /* IMPORT DYNAMICALLY */,
        blog_date: /* IMPORT DYNAMICALLY */,
        blog_content: /* IMPORT DYNAMICALLY */,
    }
]

// Get route for getting exisiting blogs
router.get("/", async (req, res) => {
  // connecting the routes to the correct templates using all.handlebars
  res.render("all");
});

// Get a speicifc blog
router.get('blogs/:num', async (req, res) => {
    return res.render('blog', blogs[req.params.num - 1]);
})

module.exports = router;
