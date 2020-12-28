import { useState, useEffect } from 'react';

const useAbility = () => {
  const [pokeUrl, setPokeUrl] = useState('');
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (pokeUrl !== '') {
        const results = await fetch(pokeUrl)
          .then(response => response.json())
          .then(data => data.abilities);
        const abilities = results.map(({ ability }) => ability.name);
        setPokemonAbilities(abilities);
      }
    };
    fetchData();
  }, [pokeUrl]);

  return [pokemonAbilities, setPokeUrl];
};

export default useAbility;
