import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CajaResultados extends Component {
    
    _renderResults = () => {
        const { results, palabraClave } = this.props;
        return results.map(establecimiento => {
            return (
                <tr key={establecimiento.Id}>
                    <td>
                        <Link to={`/detail${palabraClave}/${establecimiento.Id}`} className="link">
                            {establecimiento.Nombre}
                        </Link>
                    </td>
                    <td>
                        <Link to={`/detail${palabraClave}/${establecimiento.Id}`} className="link">
                            {establecimiento.Colonia}
                        </Link>
                    </td>
                    <td>
                        <Link to={`/detail${palabraClave}/${establecimiento.Id}`} className="link">
                            {(establecimiento.Telefono != '') 
                            ? establecimiento.Telefono 
                            : <p>No disponible</p>}
                        </Link>
                    </td>
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
                            <th>Colonia</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.results.length === 0 
                                ? <tr><td>Sin resultados</td></tr>
                                : this._renderResults()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}