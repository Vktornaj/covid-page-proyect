import React from 'react';
import SolicitudTurno from './SolicitudTurno';

export class AdminEstablecimientos extends React.Component {

    btnUpdate = () => {
        window.location.reload();
    } 

    render() {
        let { solicitudes } = this.props;

        return(
            <>
                <div className="result-box mis-establecimientos">
                    <table>
                        <thead>
                        <tr>
                            <th>Solicitudes de citas</th>
                            <th></th>
                            <th className="text-aling-right">
                                <button className="btn btn-agregar" onClick={this.btnUpdate}>Limpiar</button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                solicitudes.map((solicitud) => {
                                    return <SolicitudTurno key={solicitud.id} solicitud={solicitud} />;
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
} 