import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Registration from './Registration';
import "../assets/css/styles.css";
import logo from "../assets/images/logoAjiCreative.png";

function Codeacces() {

    const [password, setPassword] = useState("");
    

    const [flag, setFlag] = useState(false);
    const [registration, setRegistration] = useState(true);


    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!password ) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setRegistration(!registration)

        }

    }


    return (
        <div className="container" id="loginform">
             {registration ?
             <>
             <div>
                <img src={logo} alt="" width="300" height="70"></img>
                <h2 id="headerTitle">Code accès</h2> 
            </div>

             <form onSubmit={handleFormSubmit}>

                <div class="row">
                    <input type="text" className="form-control" placeholder="Code accès communiqué par admin" onChange={(event) => setPassword(event.target.value)} />
                </div>

                <div class="row"></div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Suivant</button>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        Veuillez saisir le code d'accès!!!
                </Alert>
                }

            </form> </>: <Registration />}
        </div>
    )
}

export default Codeacces