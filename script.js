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
        pokemonName.textContent = pokeData.name.toUpperCase()
        card.append(pokemonName)
        // Set type container
        const typeContainer = document.createElement('DIV')
        typeContainer.classList.add('pokemon-type-container')
        card.append(typeContainer)
        // Set type
        for (let i = 0; i < pokeData.types.length; i++) {
            const pokemonType = document.createElement('SPAN')
            pokemonType.classList.add('pokemon-type')
            pokemonType.textContent = pokeData.types[i].type.name
            typeContainer.append(pokemonType)
        }
        // Set image
        const pokemonImage = document.createElement('IMG')
        pokemonImage.classList.add('pokemon-image')
        pokemonImage.src = pokeData.sprites.other.dream_world.front_default
        card.append(pokemonImage)
        // Set ability container
        const abilityContainer = document.createElement('DIV')
        abilityContainer.classList.add('pokemon-ability-container')
        card.append(abilityContainer)
        // Set ability
        for (let i = 0; i <pokeData.abilities.length; i++) {
            const pokemonAbility = document.createElement('SPAN')
            pokemonAbility.classList.add('pokemon-ability')
            pokemonAbility.textContent = pokeData.abilities[i].ability.name
            abilityContainer.append(pokemonAbility)
        }
    }
}
createCard(1)
