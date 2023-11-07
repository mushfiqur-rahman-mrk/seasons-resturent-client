import React, { useState } from 'react';
import Container from '../Components/Ui/Container';
// import Counter from '../Components/Ui/Counter';
import { useLoaderData } from 'react-router-dom';
import Title from '../Components/Ui/Title';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import moment from 'moment/moment';
import GetUser from '../utils/GetUser';
import axios from 'axios';
import Swal from "sweetalert2";
 
 

const CheckOut = () => {
    const [order, setOrder] = useState(1);
    const foodItem=useLoaderData()
 
    const dbUser=GetUser()
    const userName=dbUser.name;
    const userEmail=dbUser.email;
 
    const date=moment().format('ll');
 
    const {_id,fname,fimage,category,price,origin,stock,addby,description,count}=foodItem || {}
        console.log(addby);
        console.log(userEmail);

    //         if(userEmail===addby){
    //   return <p>nijer mal nije kinar niyom nai</p>
    // }    

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
    const newOrder={fname,price,fimage,category,order,userEmail,userName,date,_id}
    const handleOrder=()=>{
        console.log(newOrder);
        const newstock=stock-order;
        const newcount=count + 1;
        const updatefood={newstock,newcount}
        if(userEmail===addby){
      return  Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Your can't buy your own product",
        showConfirmButton: false,
        timer: 1500
      });
    }
        console.log(updatefood);
        axios.post('http://localhost:5000/orders',newOrder)
        .then(res=>{
          console.log(res.data);
          alert('order plased successfully')
        })
        axios.patch(`http://localhost:5000/api/v1/all-foods/${_id}`,updatefood)
        .then(res=>{
          console.log(res.data);
          console.log('update kora hoice re bagna');
        })

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
                            <p>{date}</p>
                            <p>{userName}</p>
                            <p>{userEmail}</p>
                            <p>stock {stock}</p>
                            <p>count {count}</p>
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
                                stock > 0 ? <button onClick={handleOrder} className='btn btn-accent mt-5'>Place Order</button>
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