import React from "react";
import logo from "../assets/Logo.png";
import { Auth } from "../components/Auth";

export const Authenticated = (props) => {
  const { setAuthenticated } = props;

  return (
    <div className='h-screen flex flex-col gap-14 justify-center items-center'>
      <div className='flex justify-center items-center gap-4'>
        <img src={logo} className='w-24' />
        <h1 className='fony-syne text-4xl font-medium'>TalkSpace</h1>
      </div>
      <Auth setAuthenticated={setAuthenticated} />
    </div>
  );
};
