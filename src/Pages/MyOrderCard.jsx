import axios from "axios";
import React from "react";

const MyOrderCard = ({orderItem}) => {
    const {fname,price,fimage,category,order,userEmail,userName,date,_id}=orderItem || {}

    const hangleDelete=(id)=>{
        axios.delete(`http://localhost:5000/orders/${id}`)
        .then(res=>{
            console.log(res.data);
            console.log('product deleted successfully');
            alert('deleted')
        })
    }
  return (
    <>
      <div className="grid grid-cols-3 my-10 gap-5 border shadow-xl rounded-xl">
        <div>
          <img
            src={fimage}
            alt="Black Leather Bag"
            className="h-60 object-center object-cover w-full rounded-xl"
          />
        </div>
        <div className="col-span-2">
          <h1>{fname}</h1>
          <h1>{category}</h1>
          <h1>{date}</h1>
          <h1>Price: $ {price}</h1>
          <div>
            <button onClick={()=>hangleDelete(_id)} className="btn btn-error mt-5">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrderCard;
