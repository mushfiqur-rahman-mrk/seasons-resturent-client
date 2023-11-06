import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Title from "../Components/Ui/Title";
import Counter from "../Components/Ui/Counter";
import axios, { all } from "axios";
import AllFoodsCard from "./AllFoodsCard";
import Container from "../Components/Ui/Container";
import Pagination from "../Components/Ui/Pagination";

const AllFood = () => {
  const [allfoods,setAllfoods]=useState([])
  const [search,setSearch]=useState()


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
useEffect(()=>{
  axios.get(`http://localhost:5000/api/v1/all-foods?fname=${search}`)
  .then(res=>{
    console.log(res.data);
    setAllfoods(res.data)
  })
},[search])

// console.log(allfoods);
const handleSearch=(e)=>{
  e.preventDefault()
  const searchValue=e.target.search.value;
  setSearch(searchValue)
}
  return (
    <>
 

<div className="relative max-w-sm mx-auto my-10">
    <form onSubmit={handleSearch}>
    <input className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="search" type="search" placeholder="Search"/>
   
    <button  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="submit">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
    </svg>
  </button>
  </form>
</div>
     

      <Title>All foods</Title>
      <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5 justify-center items-center">
        {/* {
          allfoods?.length > 0 ? allfoods?.map(foodItem=><AllFoodsCard key={foodItem._id} foodItem={foodItem}></AllFoodsCard>)
          :
          <p>No product match for ${search}</p>
          
        } */}
        {
          allfoods?.map(foodItem=><AllFoodsCard key={foodItem._id} foodItem={foodItem}></AllFoodsCard>)
        }
      </div>
      </Container>
      <Pagination></Pagination>
      
    </>
  );
};

AllFood.propTypes = {};

export default AllFood;
