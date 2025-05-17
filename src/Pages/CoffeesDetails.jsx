import { Link, useLoaderData } from "react-router";
import Error from "./Error";

const CoffeesDetails = () => {
  // ! set error
  //   const coffeeData = useLoaderData(); // array
  // const { id } = useParams(); // get id from URL

  // const coffee = coffeeData.find(item => item._id === id);

  // if (!coffee) {
  //   return <p>Page not found</p>;
  // }

  const coffeeData = useLoaderData();

  if (!coffeeData || !coffeeData._id) {
    return <Error />;
  }

  const { name, photo, details, price, supplier, taste, category } =
    coffeeData || {};

  return (
    <div className="w-5/6 mx-auto mb-10">
      <Link
        rel="noopener noreferrer"
        to="/"
        className="btn border text-white mt-20 mb-2  border-[#331A15]
               bg-[#D2B48C] "
      >
        Back to homepage
      </Link>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 ">
            <img src={photo} alt="" className="object-contain w-70" />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className=" font-bold leading-none text-3xl">Niceties</h1>
            <h1 className="mb-2  leading-none text-xl mt-10">
              <span className="font-bold">Name:</span> {name}
            </h1>
            <p className="mb-1 text-lg">
              <span className="font-bold">Price:</span> {price}
            </p>
            <p className="mb-1 text-lg">
              <span className="font-bold">Supplier:</span> {supplier}
            </p>
            <p className="mb-1 text-lg ">
              <span className="font-bold">Taste:</span> {taste}
            </p>
            <p className="mb-1 text-lg">
              <span className="font-bold">Category:</span> {category}
            </p>
            <p className="mb-1 text-lg">
              <span className="font-bold">Details:</span> {details}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeesDetails;
