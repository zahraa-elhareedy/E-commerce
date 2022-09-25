import React from 'react';
import { useParams } from 'react-router-dom';

import Product from "./product";

const ProductDetails = props => {
    let { id } = useParams();
    const product = props.products.filter(
        c => c.id === parseInt(id)
    )[0];
    return (
        <React.Fragment>
            <h1>Details</h1>
            {
          <Product
            key={product.id}
            onIncrement={props.onIncrement}
            onDelete={props.onDelete}
            product={product}
          />
        }
        </React.Fragment>
    );
}

export default ProductDetails;