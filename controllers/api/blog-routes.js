// defining the route
const router = require("express").Router();
const Blogs = require("../models/Blogs");

// Route for creating blogs
router.post("/", async (req, res) => {
  try {
    const blogData = await Blogs.create({
      blogTitle: req.body.blogTitle,
      blogContents: req.body.blogContents,
      blogAuthor: req.body.blogAuthor,
      blogDate: req.body.blogDate,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for updated exisiting blogs
router.put("/:id", async (req, res) => {
  try {
    const blog = await Blogs.update(
      {
        blogTitle: req.body.blogTitle,
        blogContents: req.body.blogContents,
        blogAuthor: req.body.blogAuthor,
        blogDate: req.body.blogDate,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
