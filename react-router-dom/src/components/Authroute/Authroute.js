import React from "react";

const AuthRoute = ({ children }) => {
  const isLogin = false;
  if (!isLogin) return <h1>Access Denied</h1>;
  return <div>{children}</div>;
};

export default AuthRoute;
