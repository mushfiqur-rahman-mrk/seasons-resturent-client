import React, { useState } from 'react';
import Container from '../Components/Ui/Container';
// import Counter from '../Components/Ui/Counter';
import { useLoaderData } from 'react-router-dom';
import Title from '../Components/Ui/Title';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import useDate from '../Hooks/useDate';

const CheckOut = () => {
    const [order, setOrder] = useState(1);
    const foodItem=useLoaderData()
   
     
    const {_id,fname,fimage,category,price,origin,stock,addBy,description,count}=foodItem || {}
        
 
    const handleIncrement = () => {
        console.log('incre hit');
      if (order < stock) {
        setOrder(order + 1);
      }
    };
    const handledecrement = () => {
        console.log('dec hit');
      if (order > 1) {
        setOrder(order - 1);
      }
    };
    const handleOrder=()=>{
        console.log(fname,price,category,order,'uname, uemail');
    }
    return (
        <>
        <Title>Check Out</Title>
             <Container>
                    <div className='grid grid-cols-1 lg:grid-cols-3 my-10 border mx-10'>
                        <div className='bg-red-300'>
                        <img src={fimage} className='w-full h-full' alt="" />
                        </div>
                        <div className='col-span-2 flex justify-center items-center mt-5'>
                            <div>
                            
                            <h1 className='text-2xl font-semibold'>{fname}</h1>
                            <p>Price: ${price}</p>
                            <p>date</p>
                            <p>name</p>
                            <p></p>
                            <p>stock {stock}</p>
                            <p>count {count}</p>
                            <p>email</p>
                            <p>Koyta lagbe</p>
                            <div className="flex gap-3 items-center">
                                    <AiOutlineMinus
                                    onClick={handledecrement}
                                    className="text-xl bg-slate-300 rounded-md"
                                    >
                                    
                                    </AiOutlineMinus>
                                    <p className="text-2xl">{order}</p>
                                    <AiOutlinePlus
                                    onClick={handleIncrement}
                                    className="text-xl bg-slate-300 rounded-md"
                                    >
                                    
                                    </AiOutlinePlus>
                            </div>
                            {
                                stock > 0 ? <button onClick={handleOrder} className='btn btn-accent mt-5'>Order Now</button>
                                :
                                <button className='btn btn-error mt-5'>Out of Stock</button>
                            }
                            
                            </div>
                        </div>
                    </div>
      </Container>  
        </>
    );
};

export default CheckOut;