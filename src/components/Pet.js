import React from "react";

function Pet({ name, type, age, weight, id, isAdopted, onAdoptPet }) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" id={id} onClick={onAdoptPet}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;