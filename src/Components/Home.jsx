import React, { useState } from "react";

import { Link, useLoaderData } from "react-router";
import CoffeesCard from "../Pages/CoffeesCard";
import CoffeeCup from "./CoffeeCup";
import Hero from "./Hero";
import MiniHero from "./MiniHero";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Users from "./Users";

const Home = () => {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);

  return (
    <>
      <Hero />

      <Login />
      <SignUp></SignUp>
      <Users />
      <MiniHero />
      <div className="mt-20">
        <div className="text-center space-y-2">
          <p>--- Sip & Savor ---</p>
          <h1 className="text-3xl mb-5 font-bold">Our Popular Products</h1>
          <Link to="/addCoffee">
            <button
              className="btn  text-white mb-10 border border-[#331A15]
               bg-[#D2B48C] "
            >
              Add Coffee
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeesCard
              coffees={coffees}
              setCoffees={setCoffees}
              key={coffee._id}
              coffee={coffee}
            />
          ))}
        </div>
      </div>
      <CoffeeCup></CoffeeCup>
    </>
  );
};

export default Home;
