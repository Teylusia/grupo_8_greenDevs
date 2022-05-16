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
const { sequelize } = require("./database/models");
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");



app.use(cookieParser());
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(session({
  secret: "greendevs",
  resave: false,
  saveUninitialized: false
}))
app.use(userLoggedMiddleware)

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(mainRoutes);
app.use("/user",usersRoutes);
app.use("/product",productsRoutes);

app.listen(3000, () => {
  console.log("Arrancando servidor...");
  console.log("http://localhost:3000");

  //Conexion a la base MYSQL
  sequelize.sync().then(()=> {
    console.log("Conexion a la base de datos OK")

  }).catch(error => {
    console.error("Error al conectar lwa base de datos", error)
  })
});
