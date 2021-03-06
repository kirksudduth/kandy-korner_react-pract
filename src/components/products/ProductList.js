import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import KandyManager from "../../modules/KandyManager";

const ProductList = (props) => {
  const hasUser = props.hasUser;

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return KandyManager.getProductsWithProductType().then((products) => {
      console.log(products);
      setProducts(products);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>P R O D U C T S</h1>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/products/new");
          }}
        >
          New Candy Product
        </button>
      </section>
      <div className="container-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} {...props} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
