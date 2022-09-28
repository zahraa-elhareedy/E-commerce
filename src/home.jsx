import React, { Component } from 'react';

import Slider from './slider';
import Filter from './filter';

class Home extends Component {
    state = {}
    render() {
        const {products,onDelete,onIncrement,onDecrement } = this.props;
        return (
            <div>
                <Slider />
                <Filter 
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                    products={products}
                />
            </div>
        );
    }
}

export default Home;