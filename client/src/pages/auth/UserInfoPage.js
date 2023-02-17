import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const UserInfoPage = () => {
    // We'll use the history to navigate the user
    // programmatically later on (we're not using it yet)
    const history = useHistory();

    const Logout = () =>{
        localStorage.removeItem('token');
        history.push('/login');
    }

    return (
        <div className="content-container">
            <h1>Bienvenue !</h1>
            <h3> intelligestion 😁</h3>
            <button
                    onClick={Logout}
                >Deconnexion</button>
        </div>
    );
}