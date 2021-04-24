import React from 'react';
import axios from 'axios';

const baseUrl="http://localhost:3001/usuarios/";

export default class SolicitudTurno extends React.Component {
    state = {
        id: '',
        turnoStatus: ''
    }

    componentDidMount = () => {
        let { solicitud } = this.props;
        const id = solicitud.id;
        const turnostatus = solicitud.turnostatus;
        let temp = this.state;
        temp.id = id;
        temp.turnoStatus = turnostatus;
        this.setState(temp);
    }

    aceptarTurno = async ( e ) => {
        const { id } = e.target;
        await axios.patch(`${baseUrl}${id}`, { turnostatus: "aceptado" })
        .then(() => {
            let temp = this.state;
            temp.turnoStatus = 'aceptado';
            this.setState(temp);
        });
    }

    denegarTurno = async ( e ) => {
        const { id } = e.target;
        await axios.patch(`${baseUrl}${id}`, { turnostatus: "denegado" })
        .then(() => {
            let temp = this.state;
            temp.turnoStatus = 'denegado';
            this.setState(temp);
        });
    }

    showBtnAceptarDenegar = () => {
        let { solicitud } = this.props;
        const id = solicitud.id;
        if (this.state.turnoStatus === 'solicitado') {
            console.log('Entro a la condicion')
            return  <>
                        <button className="btn btn-aceptar" id={id} onClick={this.aceptarTurno}>Aceptar</button>
                        <button className="btn btn-denegar" id={id} onClick={this.denegarTurno}>Denegar</button>
                    </>;
        }        
    }

    showLabelAceptado = () => {
        if (this.state.turnoStatus === 'aceptado')
        return <span className="status-show">Aceptado</span>;
    }

    showLabelDenegado = () => {
        if (this.state.turnoStatus === 'denegado')
        return <span className="status-show">Denegado</span>;
    }
    
    renderSolicitudes = ( { id, name, lastname, age, mail, turno } ) => {
        return(
            <tr key={id}>
                <td>{turno.establecimiento}</td>
                <td>
                    {(name + ' ' + lastname).toUpperCase()} de {age} años de edad 
                    <br/>
                    solicito un turno a las {turno.hora} am. 
                    <br/>
                    Informacion de contacto: {mail}
                </td>
                <td className="text-aling-right">
                    {this.showBtnAceptarDenegar()}
                    {this.showLabelAceptado()}
                    {this.showLabelDenegado()}
                </td>
            </tr>
        );
    }

    render() {
        let { solicitud } = this.props;
        
        return(
            this.renderSolicitudes(solicitud)
        );
    }

}