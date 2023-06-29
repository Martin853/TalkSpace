import React, { useState } from "react";

import Cookies from "universal-cookie/cjs/Cookies";
import { Authenticated } from "./pages/Authenticated";
import { UnAuthenticated } from "./pages/UnAuthenticated";
const cookies = new Cookies();

export const App = () => {
  const [authenticated, setAuthenticated] = useState(cookies.get("auth-token"));

  if (!authenticated) {
    return <UnAuthenticated setAuthenticated={setAuthenticated} />;
  }

  return <Authenticated setAuthenticated={setAuthenticated} />;
};
