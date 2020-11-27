import React from 'react'

export const FormSingUp = () => {
    return (
        <div className="login-container">
            <h1>Registro</h1>
            <div className="login-form">
                <form action="" method="post">
                    <label htmlFor="sing-up-name">Nombre</label>
                    <input type="text" name="name" id="sing-up-name" />
                    <br />
                    <label htmlFor="sing-up-last-name">Apellidos</label>
                    <input type="text" name="last-name" id="sing-up-last-name" />
                    <br />
                    <label htmlFor="sing-up-mail">Correo-e</label>
                    <input type="mail" name="mail" id="sing-up-mail" />
                    <br />
                    <label htmlFor="sing-up-pass">Contrasena</label>
                    <input type="password" name="password" id="sing-up-pass" />
                    <br />
                    <label htmlFor="sing-up-age">Edad</label>
                    <input type="number" name="age" id="sing-up-age" />
                    <br />
                    <span>Sexo</span>
                    <label htmlFor="sing-up-sexo-m">Hombre</label>
                    <input className="sing-up-radio" type="radio" name="sexo" id="sing-up-sexo-m" />
                    <label htmlFor="sing-up-sexo-f">Mujer</label>
                    <input className="sing-up-radio" type="radio" name="sexo" id="sing-up-sexo-f" />
                    <br />
                    <button className="btn btn-enviar">ENVIAR</button>
                    <br />
                </form>
            </div>
        </div>
    )
}