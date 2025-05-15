import React from "react";

const NavBar = () => {
  return (
    <div>
      <div
        className="navbar flex justify-center bg-base-100 shadow-sm"
        style={{
          backgroundImage:
            "url(/images/more/15.jpg)",
        }}
      >

        <div className=" gap-1 flex">
          <img className="w-9" src="/images/more/logo1.png" alt="" />
          <h1 className="text-2xl mt-2 text-white">Espresso Emporium</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
