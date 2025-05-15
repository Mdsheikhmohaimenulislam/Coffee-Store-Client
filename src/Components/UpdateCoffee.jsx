import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { price, name, taste, supplier, category, details, photo, _id } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());

    // Send UPDated Coffee to the DB
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className=" mt-10 mb-20">
      <Link
        rel="noopener noreferrer"
        to="/"
        className="btn border text-white ml-13 border border-[#331A15]
               bg-[#D2B48C] text-[#331A15]"
      >
        Back to homepage
      </Link>
      <div>
        <div className=" w-11/12 mx-auto bg-[#F4F3F0]">
          <div className="text-center w-5/6 mx-auto px-20 pt-20">
            <h1 className="text-2xl mb-2">UPDate Coffee</h1>
          </div>
          <form onSubmit={handleUpdateCoffee} className="w-4/6 mx-auto ">
            <div className="grid grid-cols-1 mt-5 md:grid-cols-2">
              {/* Name */}
              <fieldset className="fieldset rounded-box p-4">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
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
                  defaultValue={price}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={category}
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
                  defaultValue={details}
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
                defaultValue={photo}
                className="input w-full bg-white"
                placeholder="Photo url"
              />
            </fieldset>
            <input
              className="btn w-full mb-10 border-none border-[#331A15]
               bg-[#D2B48C] text-[#331A15]"
              type="submit"
              value="Update Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
