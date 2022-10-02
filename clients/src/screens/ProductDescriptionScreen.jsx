import React from "react";
import products from "../products";

const ProductDescriptionScreen = ({ match }) => {
  const productid = match.params.id;
  const product = products.find(product => product.id === productid);

  return (
    <div>
      <div className>
        
            <h1>{product.name}</h1>
          </div>
        </div>
  );
};

export default ProductDescriptionScreen;
