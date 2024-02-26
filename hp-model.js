

async function getCharacters()
{
    // URL for fetching character data
    const charactersApi = "https://hp-api.onrender.com/api/characters";

    // Fetch character data once and reuse the result
    const characterData = await fetch(charactersApi);

    // Use promise to get JSON
    return characterData.json();
}

async function randomCharacter() {
    const characters = await getCharacters();
    if (characters.length <= 0) {
        return null;
    }
    const index = Math.floor(Math.random() * characters.length);

    return characters[index];
}

async function getHouses () {
    const characters = await getCharacters();
    const houses = characters.map(character => character.house);
    return [...new Set(houses)];
}

async function checkGuess(characterName, house) {
    const characters = await getCharacters();
    const character = characters.find(item => item.name === characterName && item.house === house);
    return character !== undefined;
}

module.exports = {
    getCharacters,
    randomCharacter,
    getHouses,
    checkGuess
}