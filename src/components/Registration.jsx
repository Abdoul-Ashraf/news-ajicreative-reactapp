import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Login from './Login';
import "../assets/css/styles.css";
import logo from "../assets/images/logoAjiCreative.png";

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [prenom, setPrenom] = useState("");
    

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);


    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !prenom ) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }


    return (<>
        <div className="container" id="loginform">
             {login ?
             <>
             <div>
                <img src={logo} alt="" width="300" height="70"></img>
                <h2 id="headerTitle">Inscription</h2> 
                <div id="alternative">
                        <label>Nous avons besoin de quelques informations supplémentaires pour configurer votre compte.</label>
                </div>
            </div>

             <form onSubmit={handleFormSubmit}>

                <div class="row">
                    <input type="text" className="form-control" placeholder="Prénom" onChange={(event) => setPrenom(event.target.value)} />
                </div>

                <div class="row">
                    <input type="text" className="form-control" placeholder="Nom" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div class="row">
                    <input type="email" className="form-control" placeholder="E-mail" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div class="row"></div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Suivant</button>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        Veuillez remplir tous les champs.Merci!
                </Alert>
                }

            </form> </>: <Login />}
        </div>
    </>)
}

export default Registration