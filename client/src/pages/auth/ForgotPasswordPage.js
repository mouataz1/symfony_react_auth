import { useState } from "react";
import { useHistory } from "react-router-dom";

export  const ForgotPasswordPage = ()=>{
    
    const [errorMessage, setErrorMessage] = useState('')
     
    const [emailValue, setEmailValue] = useState('');

    const history = useHistory('');

    const onSend = async ()=>{
        alert('still working on reset function');
    }

    return (
        <div className="content-container">
            <h1>Mot de Passe oublié ? </h1>
            <p>Récuperer votre mot de passe en deux etapes</p>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <label htmlFor="email">Adress Email</label>
            <input
            id="email"
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            placeholer="exemple@email.com"
            />
            <button 
                disabled={!emailValue}
                onClick={onSend}>Envoyer Le code</button>
                <hr/>
            <button
                onClick={()=> history.push('/login')}
            >connexion</button>
            <p>Nouveau dans Intelli'gestion ? 
                <button
                    onClick={()=> history.push('/signup')}
                >Crée un Compte</button>
            </p>
        </div>
    );
}