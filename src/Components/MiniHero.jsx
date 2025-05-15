import React from "react";

const MiniHero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 bg-[#ECEAE3] p-10 gap-10 md:grid-cols-2 lg:grid-cols-4 mt-10">
        {/* card 1 */}
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
            className="p-5"
              src="/images/icons/1.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Awesome Aroma</h2>
            <p>
You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>



{/* card 2 */}

        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              className="p-5"
              src="/images/icons/2.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">High Quality</h2>
            <p>
You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>


{/* card 3 */}

        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              className="p-5"
              src="/images/icons/3.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pure Grades</h2>
            <p>
You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>



{/* card 4 */}
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              className="p-5"
              src="/images/icons/4.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Proper Roasting</h2>
            <p>
You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>



        
      </div>
    </div>
  );
};

export default MiniHero;
