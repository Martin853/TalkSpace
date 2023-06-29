import React from "react";
import logo from "../assets/Logo.png";
import { SignOut } from "../components/SignOut";

export const NotAuthenticated = (props) => {
  const { setAuthenticated } = props;

  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='flex items-center gap-4 bg-gray-200 py-4'>
        <div className='w-10/12 h-full mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img src={logo} className='w-24' />
            <h1 className='fony-syne text-4xl font-medium'>TalkSpace</h1>
          </div>
          <SignOut setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </div>
  );
};
