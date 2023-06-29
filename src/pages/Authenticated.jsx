import React from "react";
import logo from "../assets/Logo.png";
import { SignOut } from "../components/SignOut";

import Cookies from "universal-cookie";
import { Chat } from "../components/Chat";
const cookies = new Cookies();

export const Authenticated = (props) => {
  const { setAuthenticated } = props;
  const name = cookies.get("name");
  const profilePhoto = cookies.get("profile-photo");

  return (
    <div className='w-screen h-screen flex flex-col overflow-hidden'>
      <div className='flex items-center gap-4 bg-gray-200 py-4'>
        <div className='w-10/12 h-full mx-auto flex flex-col md:flex-row gap-2 justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img src={logo} className='w-12 md:w-24' />
            <h1 className='fony-syne text-2xl md:text-4xl font-medium'>
              TalkSpace
            </h1>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <img
              src={profilePhoto}
              className='w-8 md:w-12 md:rounded-2xl rounded-lg shadow-lg'
            />
            <h1 className='font-syne text-xl md:text-2xl'>{name}</h1>
            <SignOut setAuthenticated={setAuthenticated} />
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
};
