import React, { Component } from 'react'
import { NavBar } from '../components/NavBar.js';
import { Mapa } from '../components/Mapa';
import { CajaResultados } from '../components/Caja-Resultados.js'

export class Home extends Component {
    render () {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <Mapa />
                    <CajaResultados />
                </div>
            </div>
        )
    }
}