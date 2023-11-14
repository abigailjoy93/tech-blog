const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection.js");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize");

const sesh = {
  secret: process.env.DB_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 1000 * 60 * 10, // will check every 10 minutes
    expiration: 1000 * 60 * 30, // will expire after 30 minutes
  }),
};

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sesh));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
