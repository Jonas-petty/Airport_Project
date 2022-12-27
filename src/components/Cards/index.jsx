import React from 'react';

import Hilton from "../../assets/hilton.jpg"
import Othon from "../../assets/othon.jpg"
import Sheraton from "../../assets/sheraton.jpg"
import Windsor from "../../assets/windsor.jpg"

import Card from '../Card';

import "./style.css"

function Cards() {
    return (
        <section className="hotel_cards">
            <h2>Planeje suas próximas férias perto de casa</h2>
            <div className="info">
                <div className="city_buttons">
                    <button type='button' className="btn btn-outline-secondary">Rio de Janeiro</button>
                    <button type='button' className="btn btn-outline-secondary">São Paulo</button>
                    <button type='button' className="btn btn-outline-secondary">Fortaleza</button>
                    <button type='button' className="btn btn-outline-secondary">Maceió</button>
                    <button type='button' className="btn btn-outline-secondary">Salvador</button>
                </div>
                <div className="show-more">
                    <p>Mostrar mais hotéis</p>
                    <button><i className="bi bi-arrow-left-circle"></i></button>
                    <button><i className="bi bi-arrow-right-circle"></i></button>
                </div>
            </div>
            <div className="cards">
                <Card 
                    image={Hilton}
                    place={"Rio de Janeiro - Brasil"}
                    title={"Radisson Rio de Janeiro Barra"}
                    price={407}
                />
                <Card 
                    image={Othon}
                    place={"Rio de Janeiro - Brasil"}
                    title={"Radisson Rio de Janeiro Barra"}
                    price={407}
                />
                <Card 
                    image={Sheraton}
                    place={"Rio de Janeiro - Brasil"}
                    title={"Radisson Rio de Janeiro Barra"}
                    price={407}
                />
                <Card 
                    image={Windsor}
                    place={"Rio de Janeiro - Brasil"}
                    title={"Radisson Rio de Janeiro Barra"}
                    price={407}
                />
            </div>
        </section>
        
    );
}

export default Cards;