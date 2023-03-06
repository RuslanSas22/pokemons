import React from "react";
import "./PokemonItem.css";

function PokemonItem({ pokemons, loading, pokemonDetails }) {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemons.map((item) => {
          return (
            <>
              <div
                className="pokemon-item-container"
                key={item.id}
                onClick={() => pokemonDetails(item)}
              >
                <img
                  src={item.sprites.other.home.front_default}
                  alt="pikachu"
                />
                <h3>{item.name}</h3>
                <div className="pokemon-item-type">
                  {item.types.map((idx) => {
                    return (
                      <>
                        <h5>{idx.type.name}</h5>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default PokemonItem;
