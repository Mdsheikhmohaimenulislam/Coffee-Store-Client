import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeesDetails from "../Pages/CoffeesDetails";

export const route = createBrowserRouter([
    {path:'/', Component:Root,
        children:[
            {
                index:true, 
                Component:Home,
                loader:() => fetch('http://localhost:5000/coffees')
            },
            {
                path:'/addCoffee',
                Component:AddCoffee,
            },
            {
                path:'/coffees/:id',
                loader:({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
                Component:CoffeesDetails,
            },
            {
                path:'/updateCoffee/:id',
                loader:({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
                Component:UpdateCoffee,
            }
        ]
    }
]);