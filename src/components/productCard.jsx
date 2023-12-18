import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const listProduct = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.error("Fetch is error!!!", error);
      }
    };
    listProduct();
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <Link to={{ pathname: `product/${product.id}`, state: { product } }}>
            <div key={product.id} className="cardDiv">
              <div className="imgDiv">
                <img
                  className="imgProductCard"
                  src={product.images[0]}
                  alt={product.title}
                />
              </div>
              <h3>{product.title}</h3>
              <p className="price">Price: ${product.price}</p>
            </div>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};
