import React from 'react';

import "./style.css"

function Footer() {
    return (
        <footer className='footer-info'>
            <div className="row">
                <div className="col">
                    <ul>
                        <h2>Menu</h2>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Acessibilidade</a></li>
                        <li><a href="#">Comprar Passagem</a></li>
                        <li><a href="#">Checkin</a></li>
                        <li><a href="#">Status de Voo</a></li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <h2>Contato</h2>
                        <li><a href="#">Atendimento</a></li>
                        <li><a href="#">Telefone</a></li>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <h2>Extras</h2>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;