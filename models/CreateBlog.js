// Establishing the model for current blogs
// extract 'model' and 'datatypes from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CreateBlog extends Model {}

// Creating the model for creating blogs
CreateBlog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    createBlogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createBlogContents: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createBlogAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createBlogDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "createBlog",
  }
);

module.exports = CreateBlog;
