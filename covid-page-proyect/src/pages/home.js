import React, { Component } from 'react'
import { NavBar } from '../components/NavBar.js';
import { Mapa } from '../components/Mapa';
import { CajaResultados } from '../components/Caja-Resultados.js'
import axios from 'axios';

export class Home extends Component {
    state = { 
        center: {
            lat: 22.284822,
            lng: -97.854037
        },
        results: [],
        palabraClave: "funeraria"
    }

    setPalabraClave = (palabra) => {
        const temp = this.state;
        temp.palabraClave = palabra;
        this.setState(temp);
        this.getEstablecimientos();
    }

    getEstablecimientos = async() => {
        const inegiUrl=`https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar/${this.state.palabraClave}/${this.state.center.lat},${this.state.center.lng}/5000/3122c6ce-a7bc-46dd-a988-5f405b2e08a2`
        console.log(inegiUrl);
        await axios.get(inegiUrl)
        .then(res => {
            const temp = this.state
            temp.results = res.data.slice(0,20)
            this.setState(temp)
        })
        .catch(e => {
            console.log('No se encontro ningun resultado')
        })
    }

    render () {
        return (
            <div>
                <NavBar setPalabraClave={this.setPalabraClave}/>
                <div className="container">
                    <Mapa results={this.state.results} />
                    <CajaResultados results={this.state.results} palabraClave={this.state.palabraClave} />
                </div>
            </div>
        )
    }
}