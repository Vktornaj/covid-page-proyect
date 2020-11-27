import React, { Component } from 'react'

export class CajaResultados extends Component {
    state = { results: [
        {
            'id': '0',
            'nombre': 'La comer',
            'distancia': '10Km.',
            'estado': 'cerrado'
        },
        {
            'id': '1',
            'nombre': 'La comer',
            'distancia': '10Km.',
            'estado': 'cerrado'
        },
    ] }

    _handleResults = (results) => {
        this.setState({ results })
    }

    _renderResults() {
        const { results } = this.state
        return results.map(establecimiento => {
            return (
                <tr key={establecimiento.id}>
                    <td>{establecimiento.nombre}</td>
                    <td>{establecimiento.distancia}</td>
                    <td>{establecimiento.estado}</td>
                </tr>
            )
        })
    }


    render() {
        return (
            <div className="result-box result-busqueda">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Distancia</th>
                            <th>Disponible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.results.length === 0 
                                ? <p>Sin resultados</p>
                                : this._renderResults()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}