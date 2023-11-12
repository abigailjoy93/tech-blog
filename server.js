// referenced activity 1 from module 14 for code
// defining dependencies
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = exphbs.create({});
// set up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require(".config/connection");

// setting up Handlebars as the default template engine
// establishing the engine
app.engine("handlebars", handlebars.engine);
// setting handlebars as the default engine
app.set("view engine", "handlebars");
// establishing the path from the current directory to public
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// setting the path routes
app.use(require("./controllers/blog-routes"));

// starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
