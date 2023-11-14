const sequelize = require("../config/connection");
const Blogs = require("../model/Blogs");
const blogData = require("../blog-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Blogs.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
