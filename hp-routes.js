const hpModel = require("./hp-model")

function getHpRoutes(app)
{
    app.get("/api/randomCharacter/", async (req, res) => {
        const character = await hpModel.randomCharacter()
        character.house = "guess...";
        // convert object to toJSON
        ``
        res.send(JSON.stringify(character));
    })


    app.get("/api/checkGuess/:name/:house", async (req, res) => {
        const out = await hpModel.checkGuess(req.params.name, req.params.house)
        console.log("got: " + out);
        res.send(out);
    })

}

module.exports = {
    getHpRoutes
}