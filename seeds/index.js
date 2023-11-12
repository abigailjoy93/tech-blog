const sequelize = require("../config/connection");
const CurrentBlogs = require("../model/CurrentBlogs");
const blogData = require("../current-blog-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await CurrentBlogs.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
