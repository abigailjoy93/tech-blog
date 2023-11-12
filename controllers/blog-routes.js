// defining the route
const router = require("express").Router();
const CurrentBlogs = require('../models/CurrentBlogs');

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
    const blogData = await CurrentBlogs.findAll().catch((err) => {
        res.json(err);
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render("all", {blogs});
});

// Get a speicifc blog
router.get('blogs/:id', async (req, res) => {
    try{
        const blogData = await CurrentBlogs.findByPk(req.params.id);
        if (!blogData) {
            res.status(400).json({message: "No current blogs \u1F63F"});
            return;
        }
        const blog = blogData.get({ plain: true });
        res.render('blog', blog);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;
