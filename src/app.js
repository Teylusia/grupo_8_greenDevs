const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");
const publicPath = path.resolve(__dirname, "../public");
const methodOverride = require("method-override");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(logger("dev"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(mainRoutes);
app.use(usersRoutes);
app.use(productsRoutes);

app.use((req, res, next) => {
  res.status(404).render("page404")})

app.listen(3000, () => {
  console.log("Arrancando servidor...");
  console.log("http://localhost:3000");
});
