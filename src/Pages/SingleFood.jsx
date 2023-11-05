import React from 'react';
import { Link } from 'react-router-dom';

const SingleFood = () => {
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">food category</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">food name</h1>
        <p>food origin</p>
        <p className="leading-relaxed">(kmne banay ai khawon)<br></br>
        Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <p>made by</p>
        <hr />
        <div className="flex my-5 justify-between">
          <p className="title-font font-medium text-2xl text-gray-900">$58.00</p>
          <Link to={'/checkOut'}>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Order Now</button>
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