import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

import { useEffect, useState } from "react";


const Users = () => {
  const [users, setUsers] = useState([]);
  // const { handleDeleteAuth } = use(AuthContext);

  useEffect(() => {
    fetch("https://coffee-store-server-sigma-five.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data); // Set actual user data here
      });
  }, []);

  const handleDelete = (user) => {

    const { _id } = user;


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {




      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-sigma-five.vercel.app/users/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
            
              const remainingUsers = users.filter((user) => user._id !== _id);
              setUsers(remainingUsers);

              
              //! TODO Delete user from firebase
              // uid ar jono input field make then call
              // fetch('/localhost:5000/users')


              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5">Loading users...</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className=" text-black">{user.number}</td>
                <td>{user.address}</td>
                <td>{user.creationTime}</td>
                <td>{user.lastSignInTime}</td>
                <th className="flex flex-col">
                  <button className="btn btn-ghost btn-xs">V</button>
                  <button className="btn btn-ghost btn-xs">E</button>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
