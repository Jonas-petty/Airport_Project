import React from 'react';

import "./style.css"

function InfoCard(props) {
    return (
        <div className='info col-md-4'>
            <img src={props.image} alt={props.alter} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <button className="btn btn-secondary"><i className="bi bi-arrow-right-short"></i> Leia Mais</button>
        </div>
    );
}

export default InfoCard;