import React, { Component } from 'react'
import Maps from './Maps'

export class Mapa extends Component {

    state = {
        center: {
            lat: 22.284822,
            lng: -97.854037
        },
        establecimientos: {

        }
    };

    setLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(usuarioUbicacion=> {
                let ubicacion = {
                    lat:usuarioUbicacion.coords.latitude,
                    lng:usuarioUbicacion.coords.longitude
                }
                this.setState({
                    center: {
                        lat: ubicacion.lat,
                        lng: ubicacion.lng
                    }
                })
            })
        }
    }

    render() {
        return(
        <div className="card-mapa">
            <div className="mapa">
                <Maps centro={this.state.center} establecimientos={this.props.results} />
            </div>
            <div className="control-mapa">
                <button className="btn btn-gps" onClick={() => this.setLocation()}>GPS</button>
            </div>
        </div>
        );
    }
}