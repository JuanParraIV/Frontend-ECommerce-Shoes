import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../Shared/Form/submitButton";

const UnAuthorized = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10">

      <div className="mt-24 p-10 h-40 max-w-lg border-2 font-bold border-red-600 border-solid rounded-2xl bg-red-200 w-8/12 flex flex-col justify-around items-center">
        <p className="text-red-600">¡NOT AUTHORIZED!</p>

        <SubmitButton text='Back to Home' onClick={() => navigate("/")} />

      </div>
      <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>
      <h1 className='text-center'>Do you have an account? <Link to={'/login'}><a className=' text-red-400 underline cursor-pointer'>Log in</a></Link> instead.</h1>
    </div>
  );
};

export default UnAuthorized;
