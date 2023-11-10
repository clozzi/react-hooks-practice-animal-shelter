import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return <div className="ui cards">{pets.map((pet) => (
    <Pet key={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted} onAdoptPet={onAdoptPet}/>
  ))}</div>;
}

export default PetBrowser;