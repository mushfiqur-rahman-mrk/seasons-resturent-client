import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Container from "../Components/Ui/Container";

const SingleFood = () => {
  const foodItem =useLoaderData()
  const {_id,fname,fimage,category,price,origin,stock,addBy,description,count}=foodItem || {}
 
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={fimage}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {fname}
              </h1>
              <p>{origin}</p>
              <p className="leading-relaxed">
                 {description}
              </p>
              <p>made by- user data base theke ashbe</p>
              <hr />
              <div className="flex my-5 justify-between">
                <p className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </p>
                <Link to={`/checkOut/${_id}`}>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleFood;
