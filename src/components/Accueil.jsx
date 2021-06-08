import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Codeacces from './Codeacces';
import Login from "./Login";
import "../assets/css/styles.css";
import logo from "../assets/images/logoAjiCreative.png";

function Accueil() {

    const [emaillog, setEmaillog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [login, setLogin] = useState(true);

    const [codeacces, setCodeacces] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");

        if (!emaillog ) {
            setFlag(true);
            console.log("EMPTY");
        } else if ( (emaillog !== mail)) {
            setFlag(true);
        } else {
            setLogin(!login);
            setFlag(false);
        }
    }

    function handleClick() {
        setCodeacces(!codeacces)
    }

    return ( <>
     <div className="container" id="loginform">
       {codeacces ? <div>
            {login ?
            <>
            <div>
               <img src={logo} alt="" width="300" height="70"></img>
               <h2 id="headerTitle">Connexion</h2> 
           </div>
            <form onSubmit={handleLogin}>
                <div class="row">
                    <input type="email" className="form-control" placeholder="E-mail" onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div id="alternative">
                        <label>Vous n'avez pas de compte?<a href="#" onClick={handleClick}>créez-en un?</a></label>
                </div>
                <div class="row"></div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Suivant</button>

                {flag && <Alert color='primary' variant="warning" >
                   Veuillez saisir votre email.
                        </Alert>}
            </form>
               </> : <Login />
            }

        </div> : <Codeacces />}</div> </>
    )
}

export default Accueil