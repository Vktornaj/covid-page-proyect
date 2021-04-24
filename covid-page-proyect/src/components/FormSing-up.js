import React, { Component } from 'react'
import axios from 'axios';

const baseUrl="http://localhost:3001/usuarios";

export class FormSingUp extends Component {
    state={
        form:{
            name: '',
            lastname: '',
            mail: '',
            username: '',
            password: '',
            age: '',
            sexo:''
        }
    }
    
    _handleChange= (e) => {
        this.setState({ 
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
         });
    }

    _registrar=async()=> {
        await axios.post(baseUrl, {
            name: this.state.form.name,
            lastname: this.state.form.lastname,
            mail: this.state.form.mail,
            username: this.state.form.mail,
            password: this.state.form.password,
            age: this.state.form.age,
            sexo: this.state.form.sexo
        })
        .then(response=> {
            console.log(response.data);
            alert("Usuario Registrado")
            window.location.href='./';
        })
        .catch(error=> {
            alert("Error intente mas tarde")
            console.log(error)
        })
    }

    render() {
        return (
            <div className="login-container">
                <h1>Registro</h1>
                <div className="login-form">
                    <div>
                        <label htmlFor="sing-up-name">Nombre</label>
                        <input type="text" name="name" id="sing-up-name" onChange={this._handleChange}/>
                        <br />
                        <label htmlFor="sing-up-last-name">Apellidos</label>
                        <input type="text" name="lastname" id="sing-up-last-name" onChange={this._handleChange}/>
                        <br />
                        <label htmlFor="sing-up-mail">Correo-e</label>
                        <input type="mail" name="mail" id="sing-up-mail" onChange={this._handleChange}/>
                        <br />
                        <label htmlFor="sing-up-pass">Contrasena</label>
                        <input type="password" name="password" id="sing-up-pass" onChange={this._handleChange}/>
                        <br />
                        <label htmlFor="sing-up-age">Edad</label>
                        <input type="number" name="age" id="sing-up-age" onChange={this._handleChange}/>
                        <br />
                        <span>Sexo</span>
                        <label htmlFor="sing-up-sexo-m">Hombre</label>
                        <input 
                        className="sing-up-radio" 
                        type="radio" 
                        name="sexo" 
                        id="sing-up-sexo-m" />
                        <label htmlFor="sing-up-sexo-f">Mujer</label>
                        <input 
                        className="sing-up-radio" 
                        type="radio" 
                        name="sexo" 
                        id="sing-up-sexo-f" />
                        <br />
                        <button 
                            className="btn btn-enviar" 
                            onClick={()=> this._registrar()}>
                                ENVIAR
                        </button>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}