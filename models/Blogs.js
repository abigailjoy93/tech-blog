// Establishing the model for current blogs
// extract 'model' and 'datatypes from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class blogs extends Model {}

// Creating the Blogs model
blogs.init(
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
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
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
    modelName: "blogs",
  }
);

module.exports = blogs;
