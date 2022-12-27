import React from 'react';

function Hamburguer() {


    // Not finished

    return (
        <button className="btn-mobile"
                id='btn-mobile'
                area-label="Abrir Menu"
                aria-haspopup="true"
                aria-controls="menu"
                aria-expanded="false"
        >
            <span className="hamburguer"></span>
        </button>
    );
}

export default Hamburguer;