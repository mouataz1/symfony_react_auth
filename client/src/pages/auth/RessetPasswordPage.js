import { useState } from "react";
import { useHistory } from "react-router-dom";

export  const RessetPasswordPage = ()=>{
    
    const [errorMessage, setErrorMessage] = useState('')
     
    const [passwordValue, setPasswordValue] = useState('');
    const [ConfirmpasswordValue, setConfirmPasswordValue] = useState('');

    const history = useHistory('');

    const onSignUp = async ()=>{
        alert('still working on signup function');
    }

    return (
        <div className="content-container">
            <h1>Modifier le mot de passse</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            
            <label for="password">Nouveau mot de passe</label>
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
                disabled={!passwordValue || !ConfirmpasswordValue || passwordValue !== ConfirmpasswordValue}
                onClick={onSignUp}>Modifier</button>
                 <hr/> 
            
            <p>Vous avez dèja un compte ? 
                <button
                    onClick={()=> history.push('/login')}
                >Se connecter</button>
            </p>
        </div>
    );
}