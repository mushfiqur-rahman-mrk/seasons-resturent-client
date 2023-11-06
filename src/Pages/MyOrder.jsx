import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner/Spinner";
import Container from "../Components/Ui/Container";
import useOrders from "../Hooks/useOrders";
import MyOrderCard from "./MyOrderCard";
import axios from "axios";
import GetUser from "../utils/GetUser";

const MyOrder = () => {
  const user = GetUser()
  const email=user.email;
  const [data,setData]=useState([])
  // const { data, isLoading, refetch } = useOrders();
  // console.log(data);
  // if(isLoading){
  //   return <Spinner></Spinner>
  // }
  axios.get(`http://localhost:5000/orders/${email}`)
  .then(res=>setData(res.data))
 

  return (
    <div>
      <h1>my ordr</h1>
      <Container>
        <div>
          {
            data?.map(orderItem=><MyOrderCard key={orderItem._id} orderItem={orderItem}></MyOrderCard>)
          }
        </div>
      </Container>
    </div>
  );
};

export default MyOrder;
