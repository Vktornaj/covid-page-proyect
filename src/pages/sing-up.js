import React from 'react';
import { FormSingUp } from '../components/FormSing-up'
import { NavBar } from '../components/NavBar';

export const singUp = () => (
    <div>
        <NavBar />
        <div className="container">
            <FormSingUp />
        </div>
    </div>
)