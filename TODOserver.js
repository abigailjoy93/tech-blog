// referenced activity 1 from module 14 for code
// defining dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const handlebars = exphbs.create({});

// set up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// setting up Handlebars as the default template engine
// establishing the engine
app.engine("handlebars", handlebars.engine);
// setting handlebars as the default engine
app.set("view engine", "handlebars");
// establishing the path from the current directory to public
app.use(express.static(path.join(__dirname, "public")));
// TODO: set the path routes once the controllers have been created
// example from the lesson - update names as needed
app.use(require("./controllers/dish-routes"));

// starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
