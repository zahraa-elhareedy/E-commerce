import React from "react";

import Product from "./product";

const ShoppingCart = props => {
  const {products,onDelete,onIncrement } = props;
    return ( 
        <React.Fragment>
        <h1>Shopping Cart</h1>
        {products.filter(
          c => c.cart > 0
        ).map((product) => (
          <Product
            key={product.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            product={product}
          />
        ))}
      </React.Fragment>
     );
}
 
export default ShoppingCart;
