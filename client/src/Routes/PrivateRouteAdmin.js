import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRouteAdmin = ({component: Component, ...rest}) => {
  const { authUser } = useContext(UserContext);
  
  return (

      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route {...rest} render={props => (
        authUser && authUser.isAdmin === 1 ?
              <Component {...props} />
          : <Redirect to="/" />
      )} />
  );
};

export default PrivateRouteAdmin;
