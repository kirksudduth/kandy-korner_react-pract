import React, { useState, useEffect } from "react";
import KandyManager from "../../modules/KandyManager";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({
    name: "",
    productType: {},
    productLocations: [],
  });
  const [productLocation, setProductLocation] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    KandyManager.getProductWithProductType(props.productId).then((product) =>
      setProduct({
        name: product.name,
        productType: {
          name: product.productType.name,
        },
        productLocations: product.productLocations,
      })
    );
    setIsLoading(false);
  }, []);

  useEffect(() => {
    //   send to LocationCard???
    product.productLocations.forEach((location) => {
      KandyManager.getLocation(location.id).then((locale) =>
        setProductLocation({
          name: locale.name,
          address: locale.address,
          phone: locale.phone,
        })
      );
    });
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="productName-container">
          <h3>{product.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
