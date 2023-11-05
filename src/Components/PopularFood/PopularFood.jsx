import React from "react";
import { Link } from "react-router-dom";

const PopularFood = () => {
  return (
    <>

    <h1 className="text-5xl font-semibold text-center my-10">Our Popular Food Items</h1>


      <div>
        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Food item name</div>
              <div className="flex justify-between">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                category
              </span>
              <p className="text-gray-700 text-base">
                 $price
              </p>
              </div>
            </div>
             <Link to={'single-food'}><button className="btn text-center">Details</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularFood;
