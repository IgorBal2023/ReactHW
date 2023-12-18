import { useHistory } from "react-router-dom/cjs/react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

export const Product = () => {
  const location = useLocation();
  const product = location.state.product;
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/")}>Go home</button>
      <div key={product.id} className="productDiv">
        <div className="imgDivProduct">
          {product.images.map((imgProduct, index) => (
            <img
              className="imgProduct"
              src={imgProduct}
              alt="Product images"
              key={index}
            />
          ))}
        </div>
        <div className="description">
          <h3>{product.category}</h3>
          <hr />
          <br />
          <h2>
            {product.brand} {product.title}
          </h2>
          <br />
          <br />
          <p>Description:</p>
          <p className="descriptionText">{product.description}</p>
          <br />
          <p>Rating: {product.rating}</p>
          <br />
          <br />
          <h3 className="price">Price: ${product.price}</h3>
          <br />
          <button className="buy">BUY</button>
        </div>
      </div>
    </div>
  );
};
