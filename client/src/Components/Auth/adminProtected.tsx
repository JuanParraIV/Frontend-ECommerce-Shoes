import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useAuthStore } from "@/App/store/useAuthStore";
import jwt_decode from "jwt-decode";
import UnAuthorized from "./UnAuthorized";


interface IProtectedProps {
  children: JSX.Element;
}
interface DecodedToken {
  user_id: string;
  user_rol: string;
  exp: number;
}

const AdminProtected = ({ children }: IProtectedProps) => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate()
  const { token } = useAuthStore(state=>state)
  const decodedToken = token ? jwt_decode<DecodedToken>(token):null;
      console.log(decodedToken?.user_rol);
      console.log(token);
      console.log(decodedToken);

  useEffect(() => {
    setDisplay(false)
    if(token){
      if (decodedToken?.user_rol === 'admin') {
        setDisplay(true);
      } else {
        navigate("/");
      }
    }else{
      navigate("/");
    }
  }, [setDisplay, navigate]);

  return <>{display ? children : <Loader />}</>;
};

export default AdminProtected;
