import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
    const dispatch = useDispatch()
    return ( 
        <div>
            <button onClick={() => {dispatch(login({name: "Mattia", age: 32, email: "mail@mail.com"}))}}>Login</button>
        </div>
    );
}

export default Login;