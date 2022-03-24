import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export default function SignUpPage() {
    const [errorMessage, setErrorMessage] = React.useState("");

    function signUp(event) {
        event.preventDefault();
        const mail = event.target.mail.value;
        const password = event.target.password.value;
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, mail, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log(user);
            })
            .catch(error => {
                let code = error.code;
                code = code.replaceAll("-", " ");
                code = code.replaceAll("auth/", "");
                setErrorMessage(code);
            });
        // Navigate(`/`);
    }

    return (
        <section className="page">
            <div className="signin-cntr">
            <form className="signin-form" onSubmit={signUp}>
                <h1 className="logo">Task<span>Roomies</span></h1>
                <p>Opret en bruger</p>
                <input type="email" name="mail" placeholder="Email" />
                <input type="password" name="password" placeholder="Adgangskode" />
                <p className="text-error">{errorMessage}</p>
                <button className="signin-btn">Opret</button>
            </form>

            <p className="text-center">
                Har du en bruger? <Link to="/signin">Log ind</Link>
            </p>
            </div>
        </section>
    );
}