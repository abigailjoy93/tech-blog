const router = require("express").Router();

const blogRoutes = require("./blog-routes");
const commentRoutes = require("./comments-routes");
const userRoutes = require("./user-routes");

router.use("/blog", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

module.exports = router;
