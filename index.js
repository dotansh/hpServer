const express = require("express");
const app = express();
const {getHpRoutes} = require("./hp-routes");

app.use(express.json());

const {json} = require("express");


getHpRoutes(app);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server listening on http://localhost:" + port)
});