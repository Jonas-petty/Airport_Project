import React, { useRef } from 'react';

import "./style.css"

import rioSlide from "../../assets/rio.jpg"
import spSlide from "../../assets/sp.jpg"
import parisSlide from "../../assets/paris.jpg"
import tokyoSlide from "../../assets/tokyo.jpg"

function Carousel() {

    return (
        <section className='carousel'>
            <div className="title">
                <h2>Viagens de fim de semana econômicas</h2>
                <p>
                    Gaste menos e veja mais: troque os pontos mais populares da cidade
                    por estas alternativas econômicas.
                </p>
            </div>

            <div id='riseup_carousel' className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#riseup_carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#riseup_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#riseup_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#riseup_carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={rioSlide} className="d-block w-100" alt="Cidade do Rio de Janeiro" title='Rio de Janeiro'/>
                    </div>
                    <div className="carousel-item">
                        <img src={spSlide} className="d-block w-100" alt="Cidade de São Paulo" title='São Paulo'/>
                    </div>
                    <div className="carousel-item">
                        <img src={parisSlide} className="d-block w-100" alt="Cidade de Paris" title='Paris'/>
                    </div>
                    <div className="carousel-item">
                        <img src={tokyoSlide} className="d-block w-100" alt="Cidade de Tokyo" title='Tokyo'/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#riseup_carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#riseup_carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>                
            </div>
            <div className="button-container">
                <a type='button' href='#flight-form' className="btn btn-primary">Comprar Agora</a>
            </div>
        </section>
    );
}

export default Carousel;