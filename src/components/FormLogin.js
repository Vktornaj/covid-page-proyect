import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

export class FormLogin extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    _handleChange= (e) => {
        this.setState({ 
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
         });
        console.log(this.state.form);
    }

    _iniciarSesion=async()=> {
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: this.state.form.password}})
        .then(response=> {
            return response.data;
        })
        .then(response=> {
            if (response.length > 0) {
                let respuesta = response[0];
                cookies.set('id', respuesta.id, {path: "/"})
                cookies.set('name', respuesta.name, {path: "/"})
                cookies.set('lastName', respuesta.lastName, {path: "/"})
                cookies.set('mail', respuesta.mail, {path: "/"})
                cookies.set('username', respuesta.username, {path: "/"})
                cookies.set('age', respuesta.age, {path: "/"})
                cookies.set('sexo', respuesta.sexo, {path: "/"})
                alert(`Bienvenido ${respuesta.username}`)
                window.location.href="/"
            } else {
                alert('El usuario o la contrasena no son correctos')
            }
        })
        .catch(error=> {
            console.log(error)
        })
    }

    render() {
        return(
            <div className="login-container">
                <h1>Inicio de sesion</h1>
                <div className="login-form">
                    <div className="form">
                        <span className="user-error">Usuario incorrecto</span>
                        <br />
                        <label htmlFor="login-user">Usuario</label>
                        <input type="text"
                        name="username" 
                        id="login-user"
                        onChange={this._handleChange} />
                        <br />
                        <span className="pass-error">Contrasena incorrecta</span>
                        <br />
                        <label htmlFor="login-password">Contrasena</label>
                        <input type="text" 
                        name="password" 
                        id="login-password" 
                        onChange={this._handleChange} />
                        <button 
                        className="btn btn-entrar" onClick={()=> this._iniciarSesion()}>
                            ENTRAR
                        </button>
                        <br />
                        <a href="#" className="pass-recovery">Se me olvido la contrasena</a>
                    </div>
                </div>
            </div>
        );
    }
}