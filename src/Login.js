import React, { useState } from "react";
import "./Login.css";
import image from "./images/amazonlogo2.png";
import { Link, useNavigate} from "react-router-dom";
import {auth} from "./firebase";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
        e.preventDefault();

        // fireBase signIn goes here
         auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
               navigate('/')
            })
            console.log(auth);
  }


  const register = (e) => {
        e.preventDefault();

        // firebase register goes here
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => { 
              // it successfully created the new user with email and password 

                if(auth){
                    console.log(auth)
                    navigate('/')
                }
            })
            .catch(error => alert(error.message));

  }


  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={image} alt={'logo'} />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h4>Email</h4>
          <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} />
          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
          />

          <button type="input" className="signIn_btn" onClick={signIn}>
            Sign In
          </button>
          <p>
            By signing in you agree to the AMAZON CLONE conditions of use &
            sale. Please see our privacy notice, our cookies based notice and
            ads notice.
          </p>
          <button type="input" className="signUp_btn" onClick={register}>
            create your amazon account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
