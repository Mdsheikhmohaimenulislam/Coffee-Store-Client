import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeesDetails from "../Pages/CoffeesDetails";
import Users from "../Components/Users";

export const route = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://coffee-store-server-sigma-five.vercel.app/coffees/"),
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffees/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-sigma-five.vercel.app/coffees/${params.id}`
          ),
        Component: CoffeesDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-sigma-five.vercel.app/coffees/${params.id}`
          ),
        Component: UpdateCoffee,
      },
      //   home ace tai run hbe na /users a cll hbe
      // {
      //   path: "/users",
      //   loader: () =>
      //     fetch("https://coffee-store-server-sigma-five.vercel.app/users").then(res =>res.json()),
      //   Component: Users,
      // },
    ],
  },
]);
