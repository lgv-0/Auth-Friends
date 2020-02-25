import React from "react";

export default class Login extends React.Component
{
    doLogin(data)
    {
        let Build =
            {
                username:data.username.value,
                password:data.password.value
            }
            
        console.log(Build);
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