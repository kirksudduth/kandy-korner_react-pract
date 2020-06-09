import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import ProductList from "./products/ProductList";

const ApplicationViews = (props) => {
  const setUser = props.setUser;
  const hasUser = props.hasUser;
  const clearUser = props.clearUser;

  return (
    <>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Login setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      {/* <Route
        exact
        path="/products"
        render={(props) => {
          <ProductList />;
        }}
      /> */}
    </>
  );
};

export default ApplicationViews;
