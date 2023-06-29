import React from "react";

export const MessageUI = (props) => {
  const { text, user, image } = props;

  return (
    <div className='w-full h-fit flex bg-gray-200 gap-4 p-4 rounded-2xl shadow'>
      <img src={image} className='w-16 rounded-2xl shadow-2xl' />
      <div className='flex flex-col'>
        <h1 className='font-syne text-xl'>{user}</h1>
        <h1 className='font-syne text-lg'>{text}</h1>
      </div>
    </div>
  );
};
