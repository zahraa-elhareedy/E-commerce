import React from "react";

import Product from "./product";

const ShoppingCart = props => {
  const {products,onDelete,onIncrement,total } = props;
    return ( 
        <React.Fragment>
        <h1>Shopping Cart</h1>
        <p>Total Amount: ${total()}</p>
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
