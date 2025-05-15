import React from "react";
import { Link } from "react-router";

const AddCoffee = () => {
  const handleCoffeeAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // Send Coffee data to the DB
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("after adding coffee to db successfully");

          // form.reset();
        }
      });

      // page reload 
    location.reload();
  };

  return (
    <div className=" mt-10 mb-60">
      <Link
        rel="noopener noreferrer"
        to="/"
        className="btn ml-13 text-white  border mt-20 mb-2 border border-[#331A15]
               bg-[#D2B48C] text-[#331A15]"
      >
        Back to homepage
      </Link>
      <div>
        <div className=" w-11/12 mx-auto bg-[#F4F3F0]">
          <div className="text-center w-5/6 mx-auto px-20 pt-20">
            <h1 className="text-2xl mb-2">Add New Coffee</h1>
            <p className="">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleCoffeeAdd} className="w-4/6 mx-auto ">
            <div className="grid grid-cols-1 mt-5 md:grid-cols-2">
              {/* Name */}
              <fieldset className="fieldset rounded-box p-4">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input bg-white"
                  placeholder="Coffee Name"
                />
              </fieldset>
              {/* price */}
              <fieldset className="fieldset rounded-box p-4">
                <label className="label">Price</label>
                <input
                  type="text"
                  name="price"
                  className="input bg-white"
                  placeholder="Price"
                />
              </fieldset>
              {/* Supplier */}
              <fieldset className="fieldset rounded-box p-4">
                <label className="label">Title</label>
                <input
                  type="text"
                  name="supplier"
                  className="input bg-white"
                  placeholder="supplier"
                />
              </fieldset>
              {/* Taste */}
              <fieldset className="fieldset rounded-box p-4">
                <label className="label">Taste</label>
                <input
                  type="text"
                  name="taste"
                  className="input bg-white"
                  placeholder="taste"
                />
              </fieldset>
              {/* Category */}
              <fieldset className="fieldset rounded-box px-4 pt-4">
                <label className="label">Category</label>
                <input
                  type="text"
                  name="category"
                  className="input bg-white"
                  placeholder="Category"
                />
              </fieldset>
              {/* Details */}
              <fieldset className="fieldset rounded-box px-4 pt-4">
                <label className="label">Details</label>
                <input
                  type="text"
                  name="details"
                  className="input bg-white"
                  placeholder="details"
                />
              </fieldset>
            </div>
            {/* Photo */}
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Photo</label>
              <input
                type="photo"
                name="photo"
                className="input w-full bg-white"
                placeholder="Photo url"
              />
            </fieldset>
            <input
              className="btn w-full mb-10 border-none border-[#331A15]
               bg-[#D2B48C] text-[#331A15]"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
