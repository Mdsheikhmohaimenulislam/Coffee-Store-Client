import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeesCard = ({ coffee, coffees, setCoffees }) => {
  const { photo, name, chef, price, _id } = coffee || {};

  //   Deleted section
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);

      // Start deleting the coffee
      fetch(`https://coffee-store-server-sigma-five.vercel.app/coffees/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              // remove the coffee from the state
              const removeCoffee = coffees.filter(
                (singleCoffee) => singleCoffee._id !== id
              );
              setCoffees(removeCoffee);
            }
          }
        });
    });
  };

  return (
    <div>
      <div className="w-5/6 mx-auto bg-base-200 p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          {/* Image */}
          <img src={photo} alt={name} className="  rounded-lg" />

          {/* Info */}
          <div className="flex-1 px-4 space-y-2">
            <p>
              <span className="font-bold">Name:</span> {name}
            </p>
            <p>
              <span className="font-bold">Chef:</span> {chef}
            </p>
            <p>
              <span className="font-bold">Price:</span> {price} Taka
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-2">
            <Link to={`/coffees/${_id}`}>
              <button className="btn btn-sm btn-neutral">details</button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-sm btn-error">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeesCard;
