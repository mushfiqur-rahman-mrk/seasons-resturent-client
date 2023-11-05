import React from "react";
import PropTypes from "prop-types";

const AllFood = () => {
  return (
    <>
       <div className="relative bg-red-600">
    <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
            <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
            </path>
        </svg>
    </div>
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Search Your Favourite Food
            </h2>
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                <input
          placeholder="Biriyani"
          required=""
          type="text"
          className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
        />
                <button
                    className="px-3 py-3 bg-orange-300 rounded-md font-semibold">
                    Search
                </button>
            </form>
        </div>
    </div>
</div>


<h1 className="text-5xl font-semibold text-center my-10">Our Popular Food Items</h1>
<p className="font-bold text-3xl">
    this is fancy
    <span className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
        underline
        <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
        </svg>
    </span>
    text
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
              <p>Quantity</p>
            </div>
             <button className="btn text-center">Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

AllFood.propTypes = {};

export default AllFood;
