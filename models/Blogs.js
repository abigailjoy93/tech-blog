// Establishing the model for current blogs
// extract 'model' and 'datatypes from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blogs extends Model {}

// Creating the Blogs model
Blogs.init(
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
    modelName: "Blogs",
  }
);

module.exports = Blogs;
