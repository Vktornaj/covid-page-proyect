import React from 'react';
import { FormLogin } from '../components/FormLogin'
import { NavBar } from '../components/NavBar';

export const Login = () => (
    <div>
        <NavBar />
        <div className="container">
            <FormLogin />
        </div>
    </div>
)