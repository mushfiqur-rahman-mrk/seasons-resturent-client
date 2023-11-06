import axios from "axios";
import  { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const GetUser = () => {
  const [singleUser, setSingleUser] = useState({});
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${email}`)
    .then((res) => {
      setSingleUser(res.data);
    });
  }, [email]);

  return singleUser;
};

export default GetUser;
