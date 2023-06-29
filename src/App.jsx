import React, { useState } from "react";

import Cookies from "universal-cookie/cjs/Cookies";
import { Authenticated } from "./pages/Authenticated";
import { NotAuthenticated } from "./pages/NotAuthenticated";
const cookies = new Cookies();

export const App = () => {
  const [authenticated, setAuthenticated] = useState(cookies.get("auth-token"));

  if (!authenticated) {
    return <Authenticated setAuthenticated={setAuthenticated} />;
  }

  return <NotAuthenticated setAuthenticated={setAuthenticated} />;
};
