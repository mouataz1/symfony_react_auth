import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {useToken} from "../../auth/useToken";

export  const SignUpPage = ()=>{
    
    const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('')
     
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [ConfirmpasswordValue, setConfirmPasswordValue] = useState('');

    const history = useHistory('');

    const onSignUp = async ()=>{
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
            email: emailValue,
            password:passwordValue,
        });
         if(response.status === 200){
            history.push('/login');
         }else{
            setErrorMessage('something wrong try again !');
         }
    }

    return (
        <div className="content-container">
            <h1>Inscription</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <label for="email">Email</label>
            <input
            id="email"
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            placeholer="exemple@email.com"
            />
            <label for="password">Mot de passe</label>
            <input
            id="password"
            type="password"
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
            placeholer="mot de passe"
            />
            <label for="confirmpassword">Confirmer le mot de passe</label>
            <input
            id="confirmpassword"
            type="password"
            value={ConfirmpasswordValue}
            onChange={e => setConfirmPasswordValue(e.target.value)}
            placeholer="Confirmer le mot de passe"
            />
           
            <button 
                disabled={!emailValue || !passwordValue || passwordValue !== ConfirmpasswordValue}
                onClick={onSignUp}>S'inscrire</button>
                 <hr/> 
            
            <p>Vous avez dèja un compte ? 
                <button
                    onClick={()=> history.push('/login')}
                >Se connecter</button>
            </p>
        </div>
    );
}