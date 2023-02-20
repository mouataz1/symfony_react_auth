import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {useToken} from '../../auth/useToken';

export  const LoginPage = ()=>{
    
    const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('')
     
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const history = useHistory('');

    const onLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login_check', {
                username: emailValue,
                password: passwordValue,
            });

            const {token} = response.data;
            setToken(token);
            history.push('/');
        } catch (error) {
           // console.log(error.response.data.message);
            setErrorMessage(error.response.data.message);
        }
        
    }

    return (
        <div className="content-container">
            <h1>Connexion</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            placeholer="exemple@email.com"
            />
            <input

            type="password"
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
            placeholer="mot de passe"
            />
            <button 
                disabled={!emailValue || !passwordValue}
                onClick={onLogin}>Connexion</button>
                <hr/>
            <button
                onClick={()=> history.push('/forgot-password')}
            >Mot de passe Oublié ?</button>
            <p>Nouveau dans Intelli'gestion ? 
                <button
                    onClick={()=> history.push('/signup')}
                >Crée un Compte</button>
            </p>
        </div>
    );
}