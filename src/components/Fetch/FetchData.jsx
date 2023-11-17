import { useEffect, useState } from "react";
import "./fetch.css";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(
          "https://dummyjson.com/products/category/smartphones"
        );
        const data = await responce.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Помилка при завантаженні: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="products">
        <p>
          {products ? (
            <span>
              Кількість продуктів:{" "}
              <span className="productLength">{products.length}</span>
            </span>
          ) : (
            "Loading..."
          )}
        </p>
        <hr />
        <div className="productList">
          {products
            ? products.map((product) => (
                <p key={product.id}>
                  <span className="productCategory">{product.category}</span>{" "}
                  <span className="productBrand">{product.brand}</span>{" "}
                  <span className="productTitle">{product.title}</span>
                </p>
              ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
}

export default Products;
