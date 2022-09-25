import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    const { product, onDelete, onIncrement } = this.props;
    return (
      <div className="row">
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-6">
        <div className="properties pb-30">
          <div className="properties-card">
            <div className="properties-img">
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt="" />
              </Link>
            </div>
            <div className="properties-caption properties-caption2">
              <h4>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h4>
              <p>{product.author}</p>
              <div className="properties-footer d-flex justify-content-between align-items-center">
                <div className="review">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p>
                    (<span>120</span> Review)
                  </p>
                </div>
                <div className="price">
                  <span>${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col">
          <span>{product.cart}</span>
          <button
            onClick={() => onIncrement(product)}
            className="btn btn-primary btn-sm m-2"
          >
            +
          </button>
          <span
            style={{ cursor: "pointer" }}
            title="remove from shopping cart"
            onClick={() => onDelete(product)}
          >
            <i className="fa-solid fa-trash m-2"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
