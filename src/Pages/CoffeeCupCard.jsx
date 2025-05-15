import React from "react";

const CoffeeCupCard = ({ singleCup }) => {
  console.log(singleCup);

  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={singleCup.url} alt="CoffeeCup" />
        </figure>
      </div>
    </div>
  );
};

export default CoffeeCupCard;
