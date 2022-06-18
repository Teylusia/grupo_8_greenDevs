const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");
const apiProductController = require("./routes/apiProductsRoutes")
const apiUsersController = require("./routes/apiUsersRoutes")
const publicPath = path.resolve(__dirname, "../public");
const methodOverride = require("method-override");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./database/models");
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const cors = require('cors');



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
app.use((req, res, next) => {
  res.locals.user = req.session.userLogged;
  next();});
app.use( cors() )
  

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(mainRoutes);
app.use("/user",usersRoutes);
app.use("/product",productsRoutes);
app.use("/api/product", apiProductController)
app.use("/api/users", apiUsersController)


app.listen(3000, () => {
  console.log("Arrancando servidor...");
  console.log("http://localhost:3000");

  //Conexion a la base MYSQL
  sequelize.authenticate().then(()=> {
    console.log("Conexion a la base de datos OK")

  }).catch(error => {
    console.error("Error al conectar la base de datos", error)
  })
});

//Error 404
app.use((req,res,next)=>{
  res.status(404).render("page404")
});

