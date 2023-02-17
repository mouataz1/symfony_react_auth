import { useState } from "react";
import { useHistory } from "react-router-dom";

export  const CheckCodePage = ()=>{
    
    const [errorMessage, setErrorMessage] = useState('')
     
    const [codeValue, setCodeValue] = useState('');

    const history = useHistory('');

    const onVerify = async ()=>{
        alert('still working on verify function');
    }

    return (
        <div className="content-container">
            <h1>Confirmer votre email </h1>
            <p>un code a etait envoyer à votre boite mail</p>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <label htmlFor="code">Code</label>
            <input
            id="code"
            value={codeValue}
            onChange={e => setCodeValue(e.target.value)}
            placeholer="000000"
            />
            <button 
                disabled={!codeValue}
                onClick={onVerify}>Valider</button>
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