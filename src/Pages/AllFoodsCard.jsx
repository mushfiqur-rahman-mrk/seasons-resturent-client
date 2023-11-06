import React from "react";
import { Link } from "react-router-dom";


const AllFoodsCard = ({foodItem}) => {
 
  const {_id,fname,fimage,category,price,origin,stock,addBy,description,count}=foodItem || {}
  return (
    <>
      <div className="flex px-3 py-3 w-full">
        <div className="w-full rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-60 object-cover object-center"
            src={fimage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{fname}</div>
            <div className="flex justify-between">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {category}
              </span>
              <p className="text-gray-700 text-base">$ {price}</p>
            </div>
           
          </div>
          <div className="flex justify-between px-6 mb-5">
          <p>Quantity: {stock}</p>
          <Link to={`/single-food/${_id}`}><button className="btn text-center">Details</button></Link>
          </div>   
        </div>
      </div>
    </>
  );
};

export default AllFoodsCard;
