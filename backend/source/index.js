const express = require("express");

const app = express();

app.use(express.json());

app.get('/', function (request, response) {
    response.send("Max é o catolo mais fofo do mundo")
})

app.listen(3333);