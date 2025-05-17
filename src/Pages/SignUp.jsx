import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {
  const { handleCreate } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());

    handleCreate(email, password)
      .then((result) => {
        const userInfo = {
          email,
          ...rest,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("https://coffee-store-server-sigma-five.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("User saved to DB");
            }
          });
      })
      .catch((error) => {
        console.error("Signup error:", error);
      });
  };

  return (
    <div>
      <div className="flex mt-10 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-600">
            Create an account to continue
          </p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md"
              />
              <label className="block mb-2 text-sm">Number</label>
              <input
                type="text"
                name="number"
                placeholder="Your Number"
                className="w-full px-3 py-2 border rounded-md"
              />
              <label className="block mb-2 text-sm">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="w-full px-3 py-2 border rounded-md"
              />
              <label className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
