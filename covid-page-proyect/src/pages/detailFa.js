import { Component } from 'react';
import axios from 'axios';
import Maps from '../components/Maps';
import { NavBar } from '../components/NavBar';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const baseUrl="http://localhost:3001/usuarios/";

export class FarmaciaDetail extends Component {
    state = {
        isLoggedIn: false,
        establecimiento: {},
        horaTurno: ''
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.getEstablecimiento({ params });
        const temp = this.state;
        if (cookies.get('username')) {
            temp.isLoggedIn = true;
            this.setState(temp);
            this.getInformacion();
            this._obtenerStatus();
        } else {
            temp.isLoggedIn = false;
            this.setState(temp);
        }
    }

    _obtenerStatus = async () => {
        await axios.get(baseUrl, {params: {id: cookies.get('id')}})
        .then(response => {
            return response.data[0].turnostatus;
        })
        .then(response => {
            const temp = this.state;
            temp.turnoStatus = response;
            this.setState(temp);
        });
    }

    getEstablecimiento = async ({ params }) => {
        const { id } = params;
        const inegiUrl=`https://www.inegi.org.mx/app/api/denue/v1/consulta/Ficha/${id}/3122c6ce-a7bc-46dd-a988-5f405b2e08a2`;
        await axios.get(inegiUrl)
        .then(res => {
            const temp = this.state
            temp.establecimiento = res.data[0];
            this.setState(temp)
        })
        .catch(e => {
            console.log('No se encontro ningun resultado')
        })
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    solicitarTurno = async (id, val) => {
        console.log('Solicitando turno...');
        if (!this.state.isLoggedIn) {
            alert('Inicia sesion para solicitar un turno');
        } else {
            await axios.patch(`${baseUrl}${id}`, { turno: val })
            .then(repsonse => {
                this.getInformacion();
            });
            await axios.patch(`${baseUrl}${id}`, { turnostatus: "solicitado" });
        }
    }

    cancelarTurno = async (id) => {
        console.log('Solicitando turno...');
        if (!this.state.isLoggedIn) {
            alert('Inicia sesion para cancelar un turno');
        } else {
            await axios.patch(`${baseUrl}${id}`, { turno: {
                establecimientoid: "",
                establecimiento: "",
                hora: "" 
            }})
            .then(repsonse => {
                this.getInformacion();
            });
            await axios.patch(`${baseUrl}${id}`, { turnostatus: "cancelado" });
        }
    }

    getInformacion = async() => {
        const infoUrl=`${baseUrl}${cookies.get('id')}`;
        await axios.get(infoUrl)
        .then(res => {
            const temp = this.state;
            temp.horaTurno = res.data.turno.hora;
            this.setState(temp);
        })
        .catch(e => {
            console.log('No se encontro ningun resultado')
        })
    }

    btnTurno = () => {
        const { establecimiento } = this.state;
        this.solicitarTurno(cookies.get('id'), { establecimiento: establecimiento.Id, hora:`${this.getRandomInt(5) + 7}:00` });
    }

    btnCancelarTurno = () => {
        const { establecimiento } = this.state;
        this.cancelarTurno(cookies.get('id'));
    }
    
    setPalabraClave = (palabra) => {
        const temp = this.state;
        temp.palabraClave = palabra;
        this.setState(temp);
        this.getEstablecimientos();
    }

    render() {
        const { establecimiento } = this.state;
        return(
            <>
                <NavBar setPalabraClave={this.setPalabraClave}/>
                <div className="container">
                    <div className="turnos">
                        <div className="turno-titulo">
                            <span>{establecimiento.Nombre}</span>
                        </div>
                        <div className="turno-contenido">
                            <div className="turno-control">
                                <div className="mapa">
                                    <Maps establecimientos={[establecimiento]}/>
                                </div>
                                <button className="btn" onClick={this.btnTurno}>Solicitar Turno</button>
                                <button className="btn" onClick={this.btnCancelarTurno}>Cancelar Turno</button>
                            </div>
                            <div className="turno-info">
                                <span>
                                    Direccion: Calle {establecimiento.Calle}
                                    , Colonia {establecimiento.Colonia} # {establecimiento.Num_Exteriror}
                                </span>                                
                                <span>
                                    Hora de atencion: {this.state.horaTurno}
                                </span>
                                <span>
                                    Es un placer atenderle
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}