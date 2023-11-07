import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../Ui/Title";
import axios from "axios";
import PopularCard from "./PopularCard";
import Container from "../Ui/Container";

const PopularFood = () => {

  const [popularItems,setPopularItems]=useState([])

  useEffect(()=>{
    axios.get('https://seasons-server.vercel.app/api/v1/all-foods?sortField=count&sortOrder=desc')
    .then(res=>setPopularItems(res.data))
  },[])
  return (
    <>
<Container>
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


 

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {
          popularItems?.map(popularItem=><PopularCard key={popularItem._id} popularItem={popularItem}></PopularCard>)
        }
      </div>
      <div className="flex justify-center mt-5">
        <Link to={'/all-food'}><button className="btn btn-accent">See More</button></Link>
      </div>
</Container>
 

    </>
  );
};

export default PopularFood;
