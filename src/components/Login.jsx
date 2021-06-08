import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import News from "./News";
import "../assets/css/styles.css";
import logo from "../assets/images/logoAjiCreative.png";

function Login() {

    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);
    const [news, setNews] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
        if (!passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass)) {
            setFlag(true);
        } else {
            setHome(!home);
            setNews(!news);
            setFlag(false);
        }
    }


    return (
        <div className="container" id="loginform">
            {news ? 
            <>
            <div>
               <img src={logo} class="logo" alt="" width="300" height="70"></img>
               <p><a href="Accueil.jsx"><span>&#8592;</span> {localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "")} </a></p>
               <h2 id="headerTitle">Entrer le mot de passe</h2> 
           </div>
           <form onSubmit={handleLogin}>

                <div class="row">
                    <input type="text" className="form-control" placeholder="Mot de passe" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>
                <div class="row"></div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Suivant</button>

                {flag && <Alert color='primary' variant="warning" >
                    Veuillez saisir le correcte mot de passe .
                        </Alert>}
            </form>
              </>  : <News />
            }

        </div>
    )
}

export default Login