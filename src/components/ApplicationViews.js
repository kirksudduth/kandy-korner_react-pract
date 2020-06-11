import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetails";

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
      <Route
        exact
        path="/products"
        render={(props) => {
          return <ProductList {...props} />;
        }}
      />
      <Route
        exact
        path="/products/:productId(\d+)"
        render={(props) => {
          if (hasUser) {
            return (
              <ProductDetail
                productId={parseInt(props.match.params.productId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    </>
  );
};

export default ApplicationViews;
