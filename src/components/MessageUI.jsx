import React from "react";

export const MessageUI = (props) => {
  const { text, user, image } = props;

  return (
    <div className='w-full h-fit flex bg-gray-200 gap-4 md:gap-6 p-4 rounded-2xl shadow'>
      <img
        src={image}
        className='w-10 h-10 md:w-14 md:h-14 rounded-2xl shadow-2xl'
      />
      <div className='flex flex-col'>
        <h1 className='font-syne text-xl md:text-2xl'>{user}</h1>
        <h1 className='font-syne text-sm md:text-lg'>{text}</h1>
      </div>
    </div>
  );
};
