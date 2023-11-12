// defining the route
const router = require("express").Router();
const CurrentBlogs = require("../models/CurrentBlogs");

// Get route for getting exisiting blogs
router.get("/", async (req, res) => {
  const blogData = await CurrentBlogs.findAll().catch((err) => {
    res.json(err);
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  res.render("all", { blogs });
});

// Get a speicifc blog
router.get("/currentBlogs/:id", async (req, res) => {
  try {
    const blogData = await CurrentBlogs.findByPk(req.params.id);
    if (!blogData) {
      res.status(400).json({ message: "No current blogs \u1F63F" });
      return;
    }
    const blog = blogData.get({ plain: true });
    res.render("currentBlogs", blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
