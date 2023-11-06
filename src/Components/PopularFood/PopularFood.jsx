import React from "react";
import { Link } from "react-router-dom";
import Title from "../Ui/Title";

const PopularFood = () => {
  return (
    <>

 
    <p className="font-bold text-4xl text-center">
    Our
    <span className="text-green-500 mx-1 font-extrabold text-5xl relative inline-block stroke-current">
        popular
        <svg className="absolute -bottom-1.5 w-full max-h-2" viewBox="0 0 60 5" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
        </svg>
    </span>
    food items
</p>























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
