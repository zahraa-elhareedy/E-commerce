import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Filter = props => {
    const[products, setProduct] = useState(props.products);
    const filterResults = (e) => {
        var boxes = document.querySelectorAll('input[value][type="checkbox"]:not([value=""])');
        for(var box of boxes)
        { 
            if(e.target.value !== box.value && box.checked)
                box.checked = !box.checked;
        }
        if( e.target.checked ){
            const filterResult = props.products.filter((curDate) => {
                return curDate.category === e.target.value;
        });
            setProduct(filterResult);
        }else{
            setProduct(props.products);
        } 
    }
    return (
        <React.Fragment>
            <div className="listing-area pt-50 pb-50">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-4 col-lg-4 col-md-6">

                            <div className="category-listing mb-50">

                                <div className="single-listing">

                                    <div className="select-Categories pb-30">
                                        <div className="small-tittle mb-20">
                                            <h4>Filter by Genres</h4>
                                        </div>
                                        <label className="container">Fiction
                                            <input type="checkbox" value="Fiction" onChange={filterResults}/>
                                                <span className="checkmark"></span>
                                        </label>
                                        <label className="container">Thriller
                                            <input type="checkbox" value="Thriller" onChange={filterResults}/>
                                                <span className="checkmark"></span>
                                        </label>
                                        <label className="container">Romance
                                            <input type="checkbox" value="Romance" onChange={filterResults}/>
                                                <span className="checkmark"></span>
                                        </label>
                                        <label className="container">Science Fiction
                                            <input type="checkbox" value="Science Fiction" onChange={filterResults}/>
                                                <span className="checkmark"></span>
                                        </label>
                                        <label className="container">Biography
                                            <input type="checkbox" value="Biography" onChange={filterResults}/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-6">
                            <div className="best-selling p-0">
                                <div className="row">
                                {products.map((product) => (
                                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-6" key={product.id}>
                                        <div className="properties pb-30">
                                            <div className="properties-card">
                                                <div className="properties-img">
                                                    <Link to={`/product/${product.id}`}><img src={product.img} alt="" /></Link>
                                                </div>
                                                <div className="properties-caption properties-caption2">
                                                    <h4><Link to={`/product/${product.id}`}>{product.name}</Link></h4>
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
                                                            <p>(<span>120</span> Review)</p>
                                                        </div>
                                                        <div className="price">
                                                            <span>${product.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Filter;