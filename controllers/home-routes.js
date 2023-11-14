// defining the route
const router = require("express").Router();
const Blogs = require("../models/Blogs");

// Get route for getting exisiting blogs
router.get("/", async (req, res) => {
  const blogData = await Blogs.findAll().catch((err) => {
    res.json(err);
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  res.render("all", { blogs });
});

// Get a speicifc blog
router.get("/Blogs/:id", async (req, res) => {
  try {
    const blogData = await Blogs.findByPk(req.params.id);
    if (!blogData) {
      res.status(404).json({ message: "No blogs \u1F63F" });
      return;
    }
    const blog = blogData.get({ plain: true });
    res.render("Blogs", blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
