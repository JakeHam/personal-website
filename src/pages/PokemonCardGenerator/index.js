import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const PokemonCardGenerator = () => {
  const NUM_PKMN = 800 // actually 807, but #801 - #807 are not yet implemented.
  const [pokemon, setPokemon] = useState(null);

  const setRandomPokemon = async () => {
    const pokeId = Math.ceil(Math.random() * NUM_PKMN);
    const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)).json();
    const species = await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`)).json();

    const generateRandomFlavorText = (flavorTextEntries) => {
      const englishDescriptions = flavorTextEntries.filter(option => option.language.name === 'en');
      return englishDescriptions[Math.floor(Math.random() * englishDescriptions.length)].flavor_text;
    }

    const pickRandomMove = () => {
      const moveList = data.moves;
      return moveList[Math.floor(Math.random() * moveList.length)].move;
    }

    const fetchMoveData = async (url) => {
      const moveData = await (await fetch(url)).json();
      return {
        name: moveData.name,
        power: moveData.power || "",
        description: generateRandomFlavorText(moveData.flavor_text_entries)
      }
    }

    const generateMoveset = async () => {
      let firstMove = pickRandomMove();
      let secondMove = pickRandomMove();
      while (secondMove.name === firstMove.name) {
        secondMove = pickRandomMove();
      }

      const firstMoveData = await fetchMoveData(firstMove.url);
      const secondMoveData = await fetchMoveData(secondMove.url);

      // sort by power level, descending
      return [firstMoveData, secondMoveData].sort((moveA, moveB) => Number(moveA.power) - Number(moveB.power));
    }

    setPokemon({
      name: data.name,
      imageUrl: data.sprites.other['official-artwork'].front_default,
      description: generateRandomFlavorText(species.flavor_text_entries),
      moves: await generateMoveset()
    });
  }

  useEffect(() => {
    setRandomPokemon();
  }, []);

  const PokemonCard = () => {
    return (
      <Card>
        <Card.Img variant="top" src={pokemon.imageUrl} style={{ width: '96px' }} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>
            <ul>
              {pokemon.moves.map(move => {
                return <li>{move.name} - {move.power}</li>
              })}
            </ul>
            <small>{pokemon.description}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      {pokemon && <PokemonCard />}
      <Button onClick={setRandomPokemon}>Load new Pokemon</Button>
    </>
  )
}

export default PokemonCardGenerator;
