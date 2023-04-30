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

// Uppercase first letter

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

        // Create card outline + background
        const card = document.createElement('DIV')
        card.classList.add('card')
        card.style.backgroundColor = `#${colors[randomizer(colors.length)]}`
        cardContainer.append(card)
        // Set name
        const pokemonName = document.createElement('P')
        pokemonName.classList.add('pokemon-name')
        pokemonName.textContent = pokeData.name
        card.append(pokemonName)
        // Set type
        const pokemonType = document.createElement('P')
        pokemonType.classList.add('pokemon-type')
        let types = []
        for (let i = 0; i < pokeData.types.length; i++) {
            types.push(pokeData.types[i].type.name)
        }
        pokemonType.textContent = `(${types.join('/')})`
        card.append(pokemonType)
        // Set image
        const pokemonImage = document.createElement('IMG')
        pokemonImage.classList.add('pokemon-image')
        pokemonImage.src = pokeData.sprites.other.dream_world.front_default
        card.append(pokemonImage)
        // Set ability
        // let abilities = []
        for (let i = 0; i <pokeData.abilities.length; i++) {
            const pokemonAbility = document.createElement('SPAN')
            pokemonAbility.classList.add('pokemon-ability')
            pokemonAbility.textContent = pokeData.abilities[i].ability.name
            card.append(pokemonAbility)
        }
    }
}
createCard(1)
