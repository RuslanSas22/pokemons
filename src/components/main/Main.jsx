import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoDetails from "../infoDetails/InfoDetails";
import PokemonItem from "../pokemonItem/PokemonItem";
import "./Main.css";

function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=12");
  const [nextUrl, setNextUrl] = useState();
  const [pokeDetails, setPokeDetails] = useState();

  const getChunk = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    getPokemonInfo(res.data.results);
    setLoading(false);
  };

  const getPokemonInfo = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      console.log(result.data);
      setPokemons((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    getChunk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div className="main-container">
      <header className="main-container-header">
        <h2>POKEDEX</h2>
      </header>
      <div className="main-container-content">
        <div className="main-container-content-left">
          <div className="main-container-content-left-list">
            <PokemonItem
              pokemons={pokemons}
              loading={loading}
              pokemonDetails={(poke) => setPokeDetails(poke)}
            />
          </div>
          {nextUrl && (
            <button
              className="load-more-btn"
              onClick={() => {
                setPokemons([]);
                setUrl(nextUrl);
              }}
            >
              Load More
            </button>
          )}
        </div>
        <div className="main-container-content-right">
          <InfoDetails data={pokeDetails} />
        </div>
      </div>
    </div>
  );
}

export default Main;
