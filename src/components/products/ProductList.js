import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import KandyManager from "../../modules/KandyManager";

const ProductList = (props) => {
  const hasUser = props.hasUser;

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return KandyManager.getProducts().then((products) => {
      setProducts(products);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <></>;
};

export default ProductList;
