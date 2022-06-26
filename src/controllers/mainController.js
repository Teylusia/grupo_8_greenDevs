const path = require("path");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const Sequelize = require("sequelize");
const op = Sequelize.Op;

let controller = {
  home: (req, res) => {
    let products = db.Product.findAll()

      .then(function (products) {
        res.render("index", { products, user: req.session.userLogged });
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  login: (req, res) => {
    res.render("login");
  },

  loggedIn: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      res.redirect("profile");
    } else {
      res.render("login", { errors: errors.mapped(), old: req.body });
    }
  },
  panel: (req, res) => {
    db.User.findAll().then((users) => {
      res.render("adminUsers", { usuarios: users });
    });
  },

  panelSearch: (req, res) => {
    db.User.findAll({
      where: { name: { [op.like]: "%" + req.query.searchBar + "%" } },
    }).then((users) => {
      res.render("adminUsers", { usuarios: users });
    });
  },

  admin: (req, res) => {
    db.Product.findAll().then(function (productos) {
      res.render("admin", { productos });
    });
  },
  adminSearch: (req, res) => {
    db.Product.findAll({
      where: { name: { [op.like]: "%" + req.query.searchBar + "%" } },
    }).then((results) => {
      res.render("admin", { productos: results });
    });
  },

  showSearch: (req, res) => {
    res.render("resultPage");
  },

  searchFunction: (req, res) => {
    db.Product.findAll({
      where: { name: { [op.like]: "%" + req.query.searchBar + "%" } },
    }).then((results) => {
      res.render("resultPage", {
        search: req.query.searchBar,
        products: results,
      });
    });
  },
};

module.exports = controller;
