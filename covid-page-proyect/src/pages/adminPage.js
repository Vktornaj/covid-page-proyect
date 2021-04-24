import React from 'react';
import axios from 'axios';
import { NavBar } from '../components/NavBar';
import {AdminEstablecimientos} from '../components/adminEstablecimientos';

const baseUrl="http://localhost:3001/usuarios";

export class AdminPage extends React.Component {
    state = {
        solicitudes: []
    };

    componentDidMount() {
        this._obtenerSolicitudes();
    }

    _obtenerSolicitudes = async () => {
        let res = [];
        await axios.get(baseUrl, {params: {turnostatus: "solicitado"}})
        .then(response => {
            return res = res.concat(response.data);
        })
        .then(res => {
            if (res.length > 0) {
                const temp = this.state;
                temp.solicitudes = res;
                this.setState(temp);
            }
        });
        await axios.get(baseUrl, {params: {turnostatus: "aceptado"}})
        .then(response => {
            return res = res.concat(response.data);
        })
        .then(res => {
            if (res.length > 0) {
                const temp = this.state;
                temp.solicitudes = res;
                this.setState(temp);
            }
        });
    }

    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <AdminEstablecimientos solicitudes={this.state.solicitudes}/>
                </div>
            </div>
        );
    }
}