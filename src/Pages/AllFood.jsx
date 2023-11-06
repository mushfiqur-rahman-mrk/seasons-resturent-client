import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Title from "../Components/Ui/Title";
import Counter from "../Components/Ui/Counter";
import axios from "axios";
import AllFoodsCard from "./AllFoodsCard";
import Container from "../Components/Ui/Container";

const AllFood = () => {
  const [allfoods,setAllfoods]=useState([])

  useEffect(()=>{
    // fetch('http://localhost:5000/api/v1/all-foods',{
    //     credentials: "include",
    //   })
    // .then(res=>res.json())
    // .then(data=>setAllfoods(data))
    axios.get('http://localhost:5000/api/v1/all-foods')
    .then(res=>{
      setAllfoods(res.data)
    })
},[])

console.log(allfoods);
  return (
    <>
      {/* <div className="relative bg-red-600">
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
</div> */}

      <div>
        <div className="bg-[url('')]">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
      <Counter></Counter>

      <Title>All foods</Title>
      <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center">
        {
          allfoods?.map(foodItem=><AllFoodsCard key={foodItem._id} foodItem={foodItem}></AllFoodsCard>)
        }
      </div>
      </Container>
      
    </>
  );
};

AllFood.propTypes = {};

export default AllFood;
