import React, { use } from "react";
import CoffeeCupCard from "../Pages/CoffeeCupCard";

const coffeePromise = fetch("/coffee.json").then((res) => res.json());

const CoffeeCup = () => {
  const coffeeCupData = use(coffeePromise);

  return (
    <div>
      <div className="mt-60 flex flex-col items-center justify-center mb-15">
        <p>Follow Us Now</p>
        <h1 className="text-2xl font-bold">Follow on Instagram</h1>
      </div>
      <div className="grid mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-5/6 mx-auto">
        {coffeeCupData.map((singleCup) => (
          <CoffeeCupCard key={singleCup.id} singleCup={singleCup} />
        ))}
      </div>
    </div>
  );
};

export default CoffeeCup;
