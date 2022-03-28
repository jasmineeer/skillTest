const express = require(`express`)
const app = express()

app.use(express.json())

// Memanggil controller user 
let userController = require("../controllers/userController")

// End-point untuk Get Data User
app.get("/", userController.getDataUser)

// End-point untuk Add Data User
app.post("/", userController.addDataUser)

// End-point untuk Delete Data User
app.delete("/:id", userController.deleteDataUser)

// End-point untuk Autentikasi Login Data User
app.post("/auth", userController.authentication)

module.exports = app 