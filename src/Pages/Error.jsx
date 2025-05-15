import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <section className=" sm:p-16 dark:bg-gray-50 dark:text-gray-800">
      <Link
        rel="noopener noreferrer"
        to="/"
        className="btn border text-white ml-5 border border-[#331A15]
               bg-[#D2B48C] text-[#331A15]"
      >
        Back to homepage
      </Link>
      <div className=" px-5 mx-auto my-8 space-y- text-center ">
        <img className="w-500" src="/images/404/404.gif" alt="" />
      </div>
    </section>
  );
};

export default Error;
