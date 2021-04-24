import React, { Component } from 'react'
import logo from '../dist/logo.png'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export class NavBar extends Component {
    state = {
        isLoggedIn: false,
        palabraClave: ""
    }

    componentDidMount() {
        console.log('refresh navBar')
        if (cookies.get('username')) {
            this.setState({isLoggedIn: true});
        } else {
            this.setState({isLoggedIn: false});
        }
        console.log(this.state)
    }

    handleChange = ( e ) => {
        const temp = this.state;
        temp.palabraClave = e.target.value;
        this.setState( temp );
    }

    cerrarSesion=()=> {
        cookies.remove('id', {path: "/"})
        cookies.remove('name', {path: "/"})
        cookies.remove('lastName', {path: "/"})
        cookies.remove('mail', {path: "/"})
        cookies.remove('username', {path: "/"})
        cookies.remove('age', {path: "/"})
        cookies.remove('sexo', {path: "/"})
        window.location.href="/"
    }

    showSingInButton() {
        if (!this.state.isLoggedIn) {
            return (
                <Link to={`/login`} className="btn btn-login">Iniciar Sesion</Link>
            );
        }
    }

    showSingUpButton() {
        if (!this.state.isLoggedIn) {
            return (
                <Link to={`/sing-up`} className="btn btn-sing-up">Registrarse</Link>
            );
        }
    }

    showUsernameLabel() {
        const name = cookies.get('name');
        if (this.state.isLoggedIn) {
            return (
                <button onClick={this.showPerfil} className="username-label">{name}</button>
            );
        }
    }

    showPerfil = () => {
        console.log(cookies.get('id'));
        if (cookies.get('id') === '0') {
            window.location.href='./admin';
        }
    }

    showSingOutButton() {
        if (this.state.isLoggedIn) {
            return (
                <button className="btn" onClick={()=>this.cerrarSesion()}>Cerrar Sesion</button>
            );
        }
    }

    handleClick = (e) => {
        if (window.location.href == 'http://localhost:3000/')
        this.props.setPalabraClave(e.target.innerText);
    }

    render() {
        return(
            <nav className="nav-bar">
                <Link to={`/`} className="nav-brand">
                    <img className="img-logo" src={ logo } alt="logo" />
                    <div className="text-logo">Pagina Covid</div>
                </Link>  
                <div className="nav-mid">
                    <div>
                        <button 
                        className="btn btn-search"
                        onClick={this.handleClick} >
                            Funerarias
                        </button>
                        <button 
                        className="btn btn-search"
                        onClick={this.handleClick} >
                            Hospitales
                        </button>
                        <button 
                        className="btn btn-search"
                        onClick={this.handleClick} >
                            Farmacias
                        </button>
                    </div>
                </div>
                <div className="nav-end">
                    {this.showSingInButton()}
                    {this.showSingUpButton()}
                    {this.showUsernameLabel()}
                    {this.showSingOutButton()}
                </div>
            </nav>
        );
    }
}