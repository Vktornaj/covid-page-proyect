import React, { Component } from 'react'
import logo from '../dist/test-logo.png'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export class NavBar extends Component {
    state = {
        isLoggedIn: false
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
        const username = cookies.get('username');
        if (this.state.isLoggedIn) {
            return (
                <span className="username-label">{username}</span>
            );
        }
    }

    showSingOutButton() {
        if (this.state.isLoggedIn) {
            return (
                <button className="btn" onClick={()=>this.cerrarSesion()}>Cerrar Sesion</button>
            );
        }
    }

    render() {
        return(
            <nav className="nav-bar">
                <Link to={`/`} className="nav-brand">
                    <img className="img-logo" src={ logo } alt="logo" />
                    Pagina Covid
                </Link>  
                <div className="nav-mid">
                    <form action="" method="get">
                        <input className="inp-text inp-search" type="text" name="" id="" />
                        <button className="btn btn-search">Buscar</button>
                    </form>
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