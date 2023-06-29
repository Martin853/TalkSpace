import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = (props) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      props.setAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className='bg-violet-700 font-syne font-semibold text-2xl text-white py-3 px-8 rounded-2xl'
      onClick={signInWithGoogle}
    >
      Sign In With Google
    </button>
  );
};
