const express = require("express");
const app = express();
app.use(express.json());

const {json} = require("express");


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server listening on http://localhost:" + port)
});