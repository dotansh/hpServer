
console.log("CLI app")



const [,, ...args] = process.argv;

const hpModel = require("./hp-model")

async function manageCommands(args) {
    const command = args[0];

    switch (command) {
        case "getCharacters":
            const characters = await hpModel.getCharacters();
            console.table(characters);
            break;

        case "randomCharacter":
            const randomCharacter = await hpModel.randomCharacter();
            console.log("name: " + randomCharacter.name);
            console.log("House: " + randomCharacter.house);
            break;

        case "getHouses":
            const allHouses = await hpModel.getHouses();
            console.log(allHouses);
            break;

        case "play":
            const houses = ["none", "Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
            const character = await hpModel.randomCharacter();

            let selected = -1;
            let fs = require('fs')
            let buffer = Buffer.alloc(1)

            while (houses[selected] === undefined) {
                console.log(`Select which house ${character.name} comes from: `);
                console.table(houses);

                fs.readSync(0, buffer, 0, 1)
                selected = buffer.toString('utf8');
            }
            console.log("selected: " + houses[selected]);
            if (await hpModel.checkGuess(character.name, houses[selected])) {
                console.log("you are right !");
            } else {
                console.log("You are wrong...");
            }

            break;

        default:
            console.log("unknown command: ", command)
    }
}


manageCommands(args)
