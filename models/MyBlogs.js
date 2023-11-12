// Establishing the model for current blogs
// extract 'model' and 'datatypes from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MyBlogs extends Model {}

// Creating the My Blogs model
MyBlogs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    myBlogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    myBlogContents: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    myBlogAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    myBlogDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "myBlogs",
  }
);

module.exports = MyBlogs;
