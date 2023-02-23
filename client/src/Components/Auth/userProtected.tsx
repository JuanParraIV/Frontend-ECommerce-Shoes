import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useAuthStore } from '@/App/store/useAuthStore';
import jwt_decode from "jwt-decode";
import { useGoogleAuthStore } from "@/App/store/useAuthGoogleStore";



interface IProtectedProps {
  children: JSX.Element;
}
interface DecodedToken {
  user_id: string;
  user_rol: string;
  exp: number;
}

const UserProtected = ({ children }: IProtectedProps) => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuthStore(state => state);
  const { tokenGoogle } = useGoogleAuthStore(state => state);
  const loggedIn = token || tokenGoogle; // Variable para verificar si el usuario
  const decodedToken = loggedIn ? jwt_decode<DecodedToken>(loggedIn) : null;
  console.log(decodedToken?.user_rol);
  console.log(token);
  console.log(decodedToken);
  useEffect(() => {
    setDisplay(false);
    if (!loggedIn) navigate("/unauthorized");

    if (loggedIn && decodedToken?.user_rol === 'user') {
      setDisplay(true);
    } else {


    }

  }, [setDisplay, navigate, decodedToken, children]);

  // Replace with loader
  return <>{display ? children : <Loader />}</>;
};

export default UserProtected;
