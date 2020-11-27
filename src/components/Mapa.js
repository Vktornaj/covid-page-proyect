import React from 'react'
import imgMapa from '../dist/test-mapa.jpg'

export const Mapa = () => (
    <div className="card-mapa">
        <div className="mapa">
            <img src={ imgMapa } alt="mapa" />
        </div>
        <div className="control-mapa">
            <button className="btn btn-gps">GPS</button>
            <span>Direccion</span>
            <input className="inp-text inp-direccion" type="text" name="" id="direccion1" />
            <span>Direccion 2</span>
            <input className="inp-text inp-direccion" type="text" name="" id="direccion2" />
        </div>
    </div>
)