import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const SignOut = (props) => {
  const { setAuthenticated } = props;

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    cookies.remove("name");
    cookies.remove("profile-photo");
    setAuthenticated(false);
  };

  return (
    <button
      className='h-fit bg-violet-700 font-syne font-semibold text-base text-white p-1 rounded-lg md:text-2xl md:px-3 md:rounded-2xl'
      onClick={signUserOut}
    >
      Sign Out
    </button>
  );
};
