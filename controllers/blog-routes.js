// defining the route
const router = require("express").Router();

// GET route for getting exisiting blogs
router.get("/", async (req, res) => {
  // connecting the routes to the correct templates using all.handlebars
  res.render("all");
});

module.exports = router;
