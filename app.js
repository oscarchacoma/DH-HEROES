const express = require ('express')
const app = express();
const path = require('path');

app.use(express.static("public"));


app.listen(3030, () => console.log('Servidor levantado puerto 3030'))

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/index.html"))
} )

app.get("/babbage", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/babbage.html"))
} )

app.get("/berners-lee", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/berners-lee.html"))
} )

app.get("/clarke", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/clarke.html"))
} )

app.get("/hamilton", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/hamilton.html"))
} )

app.get("/hopper", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/hopper.html"))
} )

app.get("/lovelace", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/lovelace.html"))
} )

app.get("/turing", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/turing.html"))
} )