// Pokemon image api
const pokeImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'

// Colors Palette
const colors = [
    "fbf8cc",
    "fde4cf",
    "ffcfd2",
    "f1c0e8",
    "cfbaf0",
    "a3c4f3",
    "90dbf4",
    "8eecf5",
    "98f5e1",
    "b9fbc0",
]


// Randomizer 
const randomizer = function(maxNumber) {
    return Math.floor(Math.random() * (maxNumber + 1))
}

// Get pokemon data API
const getPokemon = async (id) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res.data
    } catch (e) {
        console.log("Error!", e)
    }
}

// Create Card
const cardContainer = document.querySelector('.card-container')
const createCard = async (howMany) => {
    for (let i = 0; i < howMany; i++) {
        const pokeId = randomizer(152);
        const pokeData = await getPokemon(pokeId);

        const cardOutline = document.createElement('DIV')
        cardOutline.classList.add('card-outline')
        cardOutline.style.backgroundColor = `#${colors[randomizer(colors.length)]}`
        cardContainer.append(cardOutline)
        // Set name
        const cardNumber = document.createElement('P')
        cardNumber.textContent = pokeData.id
        cardOutline.append(cardNumber)
        // Set image
        const cardImage = document.createElement('IMG')
        cardImage.src = pokeData.sprites.other.dream_world.front_default
        cardOutline.append(cardImage)
        // Set name
        const cardTitle = document.createElement('P')
        cardTitle.textContent = pokeData.name
        cardOutline.append(cardTitle)
    }
}
createCard(9)
