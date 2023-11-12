// Establishing the model for current blogs
// extract 'model' and 'datatypes from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CurrentBlogs extends Model {}

// Creating the Current Blogs model
CurrentBlogs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogContents: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blogAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "currentBlogs",
  }
);

module.exports = CurrentBlogs;
