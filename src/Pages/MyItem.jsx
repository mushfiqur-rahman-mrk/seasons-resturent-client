import React from 'react';
import Container from '../Components/Ui/Container';

const MyItem = () => {
    return (
        <>
            
 
 

      <Container>
      <div className='grid grid-cols-3 my-10 gap-5 border shadow-xl rounded-xl'>
        <div>
        <img
            src='/src/assets/banner bg.jpg'
            alt="Black Leather Bag"
            className="h-60 object-center object-cover w-full rounded-xl"
          />
        </div>
        <div className='col-span-2'>
            <h1>Food name</h1>
            <h1>Food category</h1>
            <h1>date</h1>
            <h1>price</h1>
            <div>
                <button className='btn btn-accent'>Edit</button>
                <button className='btn btn-error'>Delete</button>
            </div>
        </div>
      </div>
      </Container>
   
 
        </>
    );
};

export default MyItem;