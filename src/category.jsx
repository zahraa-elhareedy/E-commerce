import React from 'react';
import { useParams } from 'react-router-dom';

import Product from "./product";

const Category = props => {
    let { category } = useParams();
    const products = props.products.filter(
        c => c.category === category
    );
    return (
        <React.Fragment>
            <h2>Category: {category}</h2>
            {products.map((product) => (
                <Product
                    key={product.id}
                    onIncrement={props.onIncrement}
                    onDecrement={props.onDecrement}
                    onDelete={props.onDelete}
                    product={product}
                />
            ))}
        </React.Fragment>
    );
}

export default Category;
