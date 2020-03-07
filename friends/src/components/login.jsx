import React from "react";
import Axios from "axios";

export default class Login extends React.Component
{
    doLogin(data)
    {
        let Build =
            {
                username:data.username.value,
                password:data.password.value
            }

        Axios.post("http://localhost:5000/api/login", Build).then((response)=>
            {
                window.localStorage.setItem("NOTASPECIALAUTHTOKEN", response.data.payload);
                this.props.history.push("/friends");
            })
            .catch((error)=>
            {
                console.log(error);
            })
    }

    render()
    {
        return (
            <>
                <form onSubmit={(e)=>{e.preventDefault(); this.doLogin(e.target);}}>
                    <input type="text" name="username" placeholder="User" />
                    <input type="password" name="password" placeholder="Pass" />
                    <button type="submit">Login</button>
                </form>
            </>
        )
    }
}