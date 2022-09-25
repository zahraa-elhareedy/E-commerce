import React from 'react';

const Slider = props => {
    return (
        <div className='slider-area'>
        <div className='container'>
        <div className='row align-items-center'>
        <div className='col-xl-12'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" ></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" ></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="assets/pic1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="assets/pic2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="assets/pic3.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Slider;