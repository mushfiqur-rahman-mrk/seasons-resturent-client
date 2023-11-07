import React, { useEffect, useState } from 'react';
import Container from '../Components/Ui/Container';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GetUser from '../utils/GetUser';
import MyItemCard from './MyItemCard';
import useAuth from '../Hooks/useAuth';

const MyItem = () => {
  const [myItems,setMyItems]=useState([])
  // const user = GetUser()
  // const email=user.email;
    const {user}=useAuth()
    const email=user.email
    useEffect(()=>{
      axios.get(`https://seasons-server.vercel.app/api/v1/all-foods/user/${email}`)
    .then(res=>{
      console.log(res.data);
      setMyItems(res.data)
    })
    },[])
    return (
        <>
 
      <Container>
        <div>
          {
            myItems?.map(myItem=><MyItemCard key={myItem._id} myItem={myItem}></MyItemCard>)
          }
        </div>
      </Container>
   
 
        </>
    );
};

export default MyItem;