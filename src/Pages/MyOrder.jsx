import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner/Spinner";
import Container from "../Components/Ui/Container";
 
import MyOrderCard from "./MyOrderCard";
import axios from "axios";
import GetUser from "../utils/GetUser";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyOrder = () => {
  // const user = GetUser()
  // const email=user.email;
  const {user}=useAuth()
  const email=user.email
  // const [data,setData]=useState([])
 
  // console.log(data);
  // if(isLoading){
  //   return <Spinner></Spinner>
  // }

  // const user = GetUser()
//     const email=user.email;
//   const { data, isLoading,refetch } = useQuery({
//     queryKey: ["orders"],
//     queryFn: async () => {
//       const data = await fetch(`https://seasons-server.vercel.app/orders/${email}`);
//       const orders = await data.json();
//       return orders;

const {data,isFetching,refetch}=useQuery({
  queryKey:['order'],
  queryFn: async()=>{
    const data= await fetch(`https://seasons-server.vercel.app/orders/${email}`);
    const orders= await data.json()
    return orders
  }
})
console.log(data);
  // axios.get(`https://seasons-server.vercel.app/orders/${email}`)
  // .then(res=>setData(res.data))
 

  return (
    <div className="min-h-screen">
       
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {
            data?.length > 0 ? data?.map(orderItem=><MyOrderCard key={orderItem._id} refetch={refetch} orderItem={orderItem}></MyOrderCard>)
            :
            <p className="text-2xl font-bold text-center mt-10">You did't order any food yer</p>
          }
        </div>
      </Container>
    </div>
  );
};

export default MyOrder;
