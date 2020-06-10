import React from "react";
import "../../Kandy.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-candyName">{props.product.name}</span>
        </h3>
        <Link to={`/products/${props.product.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
