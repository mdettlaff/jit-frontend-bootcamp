const express = require("express"),
  app = express(),
  port = 9898,
  mongoose = require("mongoose"),
  Recipe = require("./api/models/recipe"),
  bodyParser = require("body-parser")

mongoose.Promise = global.Promise
mongoose.connect()
mongoose.connect("mongodb://mongo14.mydevil.net/mo1168_recipes", { user: "mo1168_recipes", pass: "recipesJit2018" })


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


var routes = require("./api/routes/recipesRoutes")
routes(app)

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)