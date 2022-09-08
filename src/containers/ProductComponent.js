import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  return products.map((product, index) => {
    return (
      <div className="four wide column" key={index}>
        <Link to={`/product/${product.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="header">${product.price}</div>
                <div className="header">${product.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
};

export default ProductComponent;
