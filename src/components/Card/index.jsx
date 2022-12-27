import React from 'react';

import "./style.css"

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <div className="place-info">
                    <i className="bi bi-geo-fill"></i>
                    <p>{props.place}</p>
                </div>
                <h3>{props.title}</h3>
                <div className='price-info'>
                    <div className="stars" style={{display: "flex"}}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <p>R$ {props.price} Por diária</p>
                </div>
            </div>
        </div>
    );
}

export default Card;